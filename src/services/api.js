// API Service Layer for NYXO Job Aggregator
// Handles all communication with Django backend

// Determine API base URL based on environment
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api/v1'  // Use relative URL in production (same domain)
  : 'http://localhost:8000/api/v1';  // Use localhost in development

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('accessToken');
  }

  // Set authentication token
  setToken(token) {
    this.token = token;
    localStorage.setItem('accessToken', token);
  }

  // Remove authentication token
  removeToken() {
    this.token = null;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  // Get authentication headers
  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  // Generic request method with error handling
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (response.status === 401) {
        // Token expired, try to refresh
        const refreshed = await this.refreshToken();
        if (refreshed) {
          // Retry the original request
          config.headers = this.getAuthHeaders();
          const retryResponse = await fetch(url, config);
          return await this.handleResponse(retryResponse);
        } else {
          // Refresh failed, redirect to login
          this.removeToken();
          window.location.href = '/auth';
          throw new Error('Authentication failed');
        }
      }
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Handle API response
  async handleResponse(response) {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || errorData.message || `HTTP ${response.status}`);
    }
    
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  }

  // Refresh authentication token
  async refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return false;

    try {
      const response = await fetch(`${this.baseURL}/auth/token/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        this.setToken(data.access);
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
    
    return false;
  }

  // Authentication Methods
  async register(userData) {
    return await this.request('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    const response = await this.request('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (response.tokens?.access) {
      this.setToken(response.tokens.access);
      localStorage.setItem('refreshToken', response.tokens.refresh);
    }
    
    return response;
  }

  async logout() {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await this.request('/auth/logout/', {
          method: 'POST',
          body: JSON.stringify({ refresh: refreshToken }),
        });
      }
    } catch (error) {
      console.error('Logout request failed:', error);
    } finally {
      this.removeToken();
    }
  }

  async getCurrentUser() {
    return await this.request('/auth/profile/');
  }

  async updateCurrentUser(userData) {
    return await this.request('/auth/profile/', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // User Profile Methods
  async getProfile() {
    return await this.request('/profiles/user-profile/');
  }

  async updateProfile(profileData) {
    return await this.request('/profiles/profile/', {
      method: 'PATCH',
      body: JSON.stringify(profileData),
    });
  }

  async uploadResume(file) {
    const formData = new FormData();
    formData.append('resume', file);
    
    return await this.request('/profiles/profile/upload_resume/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
      },
      body: formData,
    });
  }

  // Skills Methods
  async getSkills() {
    return await this.request('/profiles/skills/');
  }

  async addSkill(skillData) {
    return await this.request('/profiles/skills/', {
      method: 'POST',
      body: JSON.stringify(skillData),
    });
  }

  async updateSkill(skillId, skillData) {
    return await this.request(`/profiles/skills/${skillId}/`, {
      method: 'PATCH',
      body: JSON.stringify(skillData),
    });
  }

  async deleteSkill(skillId) {
    return await this.request(`/profiles/skills/${skillId}/`, {
      method: 'DELETE',
    });
  }

  // Work Experience Methods
  async getWorkExperience() {
    return await this.request('/profiles/work-experience/');
  }

  async addWorkExperience(experienceData) {
    return await this.request('/profiles/work-experience/', {
      method: 'POST',
      body: JSON.stringify(experienceData),
    });
  }

  async updateWorkExperience(experienceId, experienceData) {
    return await this.request(`/profiles/work-experience/${experienceId}/`, {
      method: 'PUT',
      body: JSON.stringify(experienceData),
    });
  }

  async deleteWorkExperience(experienceId) {
    return await this.request(`/profiles/work-experience/${experienceId}/`, {
      method: 'DELETE',
    });
  }

  // Education Methods
  async getEducation() {
    return await this.request('/profiles/education/');
  }

  async addEducation(educationData) {
    return await this.request('/profiles/education/', {
      method: 'POST',
      body: JSON.stringify(educationData),
    });
  }

  async updateEducation(educationId, educationData) {
    return await this.request(`/profiles/education/${educationId}/`, {
      method: 'PUT',
      body: JSON.stringify(educationData),
    });
  }

  async deleteEducation(educationId) {
    return await this.request(`/profiles/education/${educationId}/`, {
      method: 'DELETE',
    });
  }

  // Achievements Methods
  async getAchievements() {
    return await this.request('/profiles/achievements/');
  }

  async addAchievement(achievementData) {
    return await this.request('/profiles/achievements/', {
      method: 'POST',
      body: JSON.stringify(achievementData),
    });
  }

  async updateAchievement(achievementId, achievementData) {
    return await this.request(`/profiles/achievements/${achievementId}/`, {
      method: 'PUT',
      body: JSON.stringify(achievementData),
    });
  }

  async deleteAchievement(achievementId) {
    return await this.request(`/profiles/achievements/${achievementId}/`, {
      method: 'DELETE',
    });
  }

  // Portfolio Methods
  async getPortfolioItems() {
    return await this.request('/profiles/portfolio/');
  }

  async addPortfolioItem(itemData) {
    return await this.request('/profiles/portfolio/', {
      method: 'POST',
      body: JSON.stringify(itemData),
    });
  }

  async updatePortfolioItem(itemId, itemData) {
    return await this.request(`/profiles/portfolio/${itemId}/`, {
      method: 'PATCH',
      body: JSON.stringify(itemData),
    });
  }

  async deletePortfolioItem(itemId) {
    return await this.request(`/profiles/portfolio/${itemId}/`, {
      method: 'DELETE',
    });
  }

  // Job Methods
  async getJobs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/jobs/jobs/${queryString ? `?${queryString}` : ''}`);
  }

  async getJob(jobId) {
    return await this.request(`/jobs/jobs/${jobId}/`);
  }

  async searchJobs(searchParams) {
    return await this.request('/jobs/jobs/search/', {
      method: 'POST',
      body: JSON.stringify(searchParams),
    });
  }

  async getJobMatches() {
    return await this.request('/jobs/jobs/matches/');
  }

  async saveJob(jobId) {
    return await this.request(`/jobs/jobs/${jobId}/save/`, {
      method: 'POST',
    });
  }

  async unsaveJob(jobId) {
    return await this.request(`/jobs/jobs/${jobId}/unsave/`, {
      method: 'POST',
    });
  }

  // Job Application Methods
  async getApplications() {
    return await this.request('/applications/applications/');
  }

  async createApplication(applicationData) {
    return await this.request('/applications/applications/', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    });
  }

  async updateApplication(applicationId, applicationData) {
    return await this.request(`/applications/applications/${applicationId}/`, {
      method: 'PATCH',
      body: JSON.stringify(applicationData),
    });
  }

  async deleteApplication(applicationId) {
    return await this.request(`/applications/applications/${applicationId}/`, {
      method: 'DELETE',
    });
  }

  async getApplicationStats() {
    return await this.request('/applications/applications/stats/');
  }

  // Analytics Methods
  async getAnalyticsDashboard() {
    // Since there's no single dashboard endpoint, we'll aggregate data from multiple endpoints
    try {
      const [
        careereInsights,
        recommendations, 
        successMetrics
      ] = await Promise.allSettled([
        this.request('/analytics/career-insights/'),
        this.request('/analytics/recommendations/'),
        this.request('/analytics/success-metrics/')
      ]);

      return {
        career_insights: careereInsights.status === 'fulfilled' ? careereInsights.value : [],
        recommendations: recommendations.status === 'fulfilled' ? recommendations.value : [],
        success_metrics: successMetrics.status === 'fulfilled' ? successMetrics.value : [],
        // Add some computed values
        jobs_searched_count: 0, // Will be populated from applications
        applications_this_week: 0,
        job_matches_count: 0,
        new_matches_this_week: 0
      };
    } catch (error) {
      console.error('Error loading analytics dashboard:', error);
      return {
        career_insights: [],
        recommendations: [],
        success_metrics: [],
        jobs_searched_count: 0,
        applications_this_week: 0,
        job_matches_count: 0,
        new_matches_this_week: 0
      };
    }
  }

  async getMarketAnalytics(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/analytics/market-analytics/${queryString ? `?${queryString}` : ''}`);
  }

  async getCareerInsights() {
    return await this.request('/analytics/career-insights/');
  }

  async getRecommendations() {
    return await this.request('/analytics/recommendations/');
  }

  async getSuccessMetrics() {
    return await this.request('/analytics/success-metrics/');
  }

  async getCareerProgress() {
    return await this.request('/analytics/career-progress/');
  }

  // Job Search Methods
  async searchJobs(searchParams) {
    return await this.request('/external/search/', {
      method: 'POST',
      body: JSON.stringify(searchParams),
    });
  }

  async getJobs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/jobs/${queryString ? `?${queryString}` : ''}`);
  }

  async getJobRecommendations() {
    return await this.request('/jobs/recommendations/');
  }

  async calculateJobMatches() {
    return await this.request('/jobs/calculate-matches/', {
      method: 'POST',
    });
  }

  async getJobMatchDetails(jobId) {
    return await this.request(`/jobs/${jobId}/match-details/`);
  }

  async getSearchHistory() {
    return await this.request('/external/search/history/');
  }

  // External API Methods
  async syncExternalJobs() {
    return await this.request('/external-apis/sync-jobs/', {
      method: 'POST',
    });
  }

  async getExternalJobsStatus() {
    return await this.request('/external-apis/sync-status/');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;

// Export individual methods for easier importing
export const {
  register,
  login,
  logout,
  getCurrentUser,
  updateCurrentUser,
  getProfile,
  updateProfile,
  uploadResume,
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  getWorkExperience,
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  getEducation,
  addEducation,
  updateEducation,
  deleteEducation,
  getAchievements,
  addAchievement,
  updateAchievement,
  deleteAchievement,
  getPortfolioItems,
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  getJobs,
  getJob,
  searchJobs,
  getJobMatches,
  saveJob,
  unsaveJob,
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationStats,
  getAnalyticsDashboard,
  getMarketAnalytics,
  getCareerInsights,
  getRecommendations,
  getSuccessMetrics,
  getCareerProgress,
  syncExternalJobs,
  getExternalJobsStatus,
} = apiService;
