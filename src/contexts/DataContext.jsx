import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';
import { useAuth } from './AuthContext';

// Create Data Context
const DataContext = createContext();

// Custom hook to use data context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Data Provider Component
export const DataProvider = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  
  // State for various data
  const [profile, setProfile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [jobMatches, setJobMatches] = useState([]);
  const [applications, setApplications] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [skills, setSkills] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);
  
  // Loading states
  const [profileLoading, setProfileLoading] = useState(false);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [applicationsLoading, setApplicationsLoading] = useState(false);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  
  // Load initial data when user authenticates
  useEffect(() => {
    if (isAuthenticated && user) {
      loadInitialData();
    } else {
      // Clear data when user logs out
      clearAllData();
    }
  }, [isAuthenticated, user]);

  const clearAllData = () => {
    setProfile(null);
    setJobs([]);
    setJobMatches([]);
    setApplications([]);
    setAnalytics(null);
    setSkills([]);
    setPortfolioItems([]);
  };

  const loadInitialData = async () => {
    try {
      // Load all data in parallel for better performance
      await Promise.allSettled([
        loadProfile(),
        loadRecentJobs(),
        loadApplications(),
        loadAnalytics(),
      ]);
    } catch (error) {
      console.error('Error loading initial data:', error);
    }
  };

  // Profile Methods
  const loadProfile = async () => {
    try {
      setProfileLoading(true);
      const profileData = await apiService.getProfile();
      setProfile(profileData);
      
      // Load related profile data
      const [skillsData, portfolioData] = await Promise.allSettled([
        apiService.getSkills(),
        apiService.getPortfolioItems(),
      ]);
      
      if (skillsData.status === 'fulfilled') {
        setSkills(skillsData.value.results || skillsData.value);
      }
      
      if (portfolioData.status === 'fulfilled') {
        setPortfolioItems(portfolioData.value.results || portfolioData.value);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setProfileLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const updatedProfile = await apiService.updateProfile(profileData);
      setProfile(updatedProfile);
      return { success: true, data: updatedProfile };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false, error: error.message };
    }
  };

  // Skills Methods
  const addSkill = async (skillData) => {
    try {
      const newSkill = await apiService.addSkill(skillData);
      setSkills(prev => [...prev, newSkill]);
      return { success: true, data: newSkill };
    } catch (error) {
      console.error('Error adding skill:', error);
      return { success: false, error: error.message };
    }
  };

  const updateSkill = async (skillId, skillData) => {
    try {
      const updatedSkill = await apiService.updateSkill(skillId, skillData);
      setSkills(prev => prev.map(skill => 
        skill.id === skillId ? updatedSkill : skill
      ));
      return { success: true, data: updatedSkill };
    } catch (error) {
      console.error('Error updating skill:', error);
      return { success: false, error: error.message };
    }
  };

  const deleteSkill = async (skillId) => {
    try {
      await apiService.deleteSkill(skillId);
      setSkills(prev => prev.filter(skill => skill.id !== skillId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting skill:', error);
      return { success: false, error: error.message };
    }
  };

  // Portfolio Methods
  const addPortfolioItem = async (itemData) => {
    try {
      const newItem = await apiService.addPortfolioItem(itemData);
      setPortfolioItems(prev => [...prev, newItem]);
      return { success: true, data: newItem };
    } catch (error) {
      console.error('Error adding portfolio item:', error);
      return { success: false, error: error.message };
    }
  };

  const updatePortfolioItem = async (itemId, itemData) => {
    try {
      const updatedItem = await apiService.updatePortfolioItem(itemId, itemData);
      setPortfolioItems(prev => prev.map(item => 
        item.id === itemId ? updatedItem : item
      ));
      return { success: true, data: updatedItem };
    } catch (error) {
      console.error('Error updating portfolio item:', error);
      return { success: false, error: error.message };
    }
  };

  const deletePortfolioItem = async (itemId) => {
    try {
      await apiService.deletePortfolioItem(itemId);
      setPortfolioItems(prev => prev.filter(item => item.id !== itemId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      return { success: false, error: error.message };
    }
  };

  // Job Methods
  const loadRecentJobs = async (params = {}) => {
    try {
      setJobsLoading(true);
      const jobsData = await apiService.getJobs(params);
      setJobs(jobsData.results || jobsData);
      return { success: true, data: jobsData };
    } catch (error) {
      console.error('Error loading jobs:', error);
      return { success: false, error: error.message };
    } finally {
      setJobsLoading(false);
    }
  };

  const searchJobs = async (searchParams) => {
    try {
      setJobsLoading(true);
      const jobsData = await apiService.searchJobs(searchParams);
      setJobs(jobsData.results || jobsData);
      return { success: true, data: jobsData };
    } catch (error) {
      console.error('Error searching jobs:', error);
      return { success: false, error: error.message };
    } finally {
      setJobsLoading(false);
    }
  };

  const loadJobMatches = async () => {
    try {
      const matchesData = await apiService.getJobMatches();
      setJobMatches(matchesData.results || matchesData);
      return { success: true, data: matchesData };
    } catch (error) {
      console.error('Error loading job matches:', error);
      return { success: false, error: error.message };
    }
  };

  const saveJob = async (jobId) => {
    try {
      await apiService.saveJob(jobId);
      // Update the job in the local state
      setJobs(prev => prev.map(job => 
        job.id === jobId ? { ...job, is_saved: true } : job
      ));
      return { success: true };
    } catch (error) {
      console.error('Error saving job:', error);
      return { success: false, error: error.message };
    }
  };

  const unsaveJob = async (jobId) => {
    try {
      await apiService.unsaveJob(jobId);
      // Update the job in the local state
      setJobs(prev => prev.map(job => 
        job.id === jobId ? { ...job, is_saved: false } : job
      ));
      return { success: true };
    } catch (error) {
      console.error('Error unsaving job:', error);
      return { success: false, error: error.message };
    }
  };

  // Application Methods
  const loadApplications = async () => {
    try {
      setApplicationsLoading(true);
      const applicationsData = await apiService.getApplications();
      setApplications(applicationsData.results || applicationsData);
      return { success: true, data: applicationsData };
    } catch (error) {
      console.error('Error loading applications:', error);
      return { success: false, error: error.message };
    } finally {
      setApplicationsLoading(false);
    }
  };

  const createApplication = async (applicationData) => {
    try {
      const newApplication = await apiService.createApplication(applicationData);
      setApplications(prev => [newApplication, ...prev]);
      return { success: true, data: newApplication };
    } catch (error) {
      console.error('Error creating application:', error);
      return { success: false, error: error.message };
    }
  };

  const updateApplication = async (applicationId, applicationData) => {
    try {
      const updatedApplication = await apiService.updateApplication(applicationId, applicationData);
      setApplications(prev => prev.map(app => 
        app.id === applicationId ? updatedApplication : app
      ));
      return { success: true, data: updatedApplication };
    } catch (error) {
      console.error('Error updating application:', error);
      return { success: false, error: error.message };
    }
  };

  const deleteApplication = async (applicationId) => {
    try {
      await apiService.deleteApplication(applicationId);
      setApplications(prev => prev.filter(app => app.id !== applicationId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting application:', error);
      return { success: false, error: error.message };
    }
  };

  // Analytics Methods
  const loadAnalytics = async () => {
    try {
      setAnalyticsLoading(true);
      const analyticsData = await apiService.getAnalyticsDashboard();
      setAnalytics(analyticsData);
      return { success: true, data: analyticsData };
    } catch (error) {
      console.error('Error loading analytics:', error);
      return { success: false, error: error.message };
    } finally {
      setAnalyticsLoading(false);
    }
  };

  const getMarketAnalytics = async (params) => {
    try {
      return await apiService.getMarketAnalytics(params);
    } catch (error) {
      console.error('Error getting market analytics:', error);
      return { success: false, error: error.message };
    }
  };

  const getCareerInsights = async () => {
    try {
      return await apiService.getCareerInsights();
    } catch (error) {
      console.error('Error getting career insights:', error);
      return { success: false, error: error.message };
    }
  };

  const getRecommendations = async () => {
    try {
      return await apiService.getRecommendations();
    } catch (error) {
      console.error('Error getting recommendations:', error);
      return { success: false, error: error.message };
    }
  };

  // Sync external jobs
  const syncExternalJobs = async () => {
    try {
      const result = await apiService.syncExternalJobs();
      // Reload jobs after sync
      await loadRecentJobs();
      return { success: true, data: result };
    } catch (error) {
      console.error('Error syncing external jobs:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    // Data
    profile,
    jobs,
    jobMatches,
    applications,
    analytics,
    skills,
    portfolioItems,

    // Loading states
    profileLoading,
    jobsLoading,
    applicationsLoading,
    analyticsLoading,

    // Profile methods
    loadProfile,
    updateProfile,

    // Skills methods
    addSkill,
    updateSkill,
    deleteSkill,

    // Portfolio methods
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,

    // Job methods
    loadRecentJobs,
    searchJobs,
    loadJobMatches,
    saveJob,
    unsaveJob,

    // Application methods
    loadApplications,
    createApplication,
    updateApplication,
    deleteApplication,

    // Analytics methods
    loadAnalytics,
    getMarketAnalytics,
    getCareerInsights,
    getRecommendations,

    // External API methods
    syncExternalJobs,

    // Utility methods
    loadInitialData,
    clearAllData,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
