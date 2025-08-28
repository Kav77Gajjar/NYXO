import { createContext, useContext, useState, useEffect } from 'react'

const TranslationContext = createContext()

export const translations = {
  english: {
    // Navigation
    dashboard: 'Dashboard',
    jobMatches: 'Job Matches',
    applications: 'Applications',
    toolkit: 'Toolkit',
    jobController: 'Job Controller',
    profile: 'Profile',
    
    // Dashboard
    hello: 'Hello',
    ready: 'Ready to accelerate your career? Here\'s your personalized job search dashboard.',
    today: 'Today',
    yourActivity: 'Your Activity',
    jobsSearched: 'Jobs Searched',
    applicationsSent: 'Applications Sent',
    jobMatches: 'Job Matches',
    interviews: 'Interviews',
    thisWeek: 'this week',
    newMatches: 'new matches',
    upcoming: 'upcoming',
    
    // Recent Activities
    recentActivities: 'Recent Activities',
    viewAll: 'View All',
    applied: 'Applied',
    matched: 'Matched',
    interview: 'Interview',
    searched: 'Searched',
    track: 'Track',
    applyNow: 'Apply Now',
    prepare: 'Prepare',
    viewResults: 'View Results',
    
    // Quick Actions
    quickActions: 'Quick Actions',
    updateProfile: 'Update Profile',
    updateProfileDesc: 'Keep your profile fresh and attract better opportunities',
    careerTools: 'Career Tools',
    careerToolsDesc: 'Resume builder, interview prep, and skill assessments',
    jobSearch: 'Job Search',
    jobSearchDesc: 'Find new opportunities and track your applications',
    
    // Job Applications
    myJobApplications: 'My Job Applications',
    trackApplications: 'Track all your job applications and their current status',
    totalApplications: 'Total Applications',
    underReview: 'Under Review',
    offers: 'Offers',
    filterByStatus: 'Filter by Status:',
    sortBy: 'Sort by:',
    applicationDate: 'Application Date',
    companyName: 'Company Name',
    position: 'Position',
    status: 'Status',
    allApplications: 'All Applications',
    interviewScheduled: 'Interview Scheduled',
    offerReceived: 'Offer Received',
    rejected: 'Rejected',
    withdrawn: 'Withdrawn',
    
    // Job Matches
    personalizedJobMatches: 'Personalized Job Matches',
    jobMatchesDesc: 'Discover opportunities tailored to your skills and preferences',
    
    // Settings
    settings: 'Settings',
    theme: 'Theme',
    language: 'Language',
    light: 'Light',
    dark: 'Dark',
    
    // Common
    apply: 'Apply',
    save: 'Save',
    viewDetails: 'View Details',
    followUp: 'Follow Up',
    withdraw: 'Withdraw',
    acceptOffer: 'Accept Offer',
    close: 'Close',
    edit: 'Edit',
    cancel: 'Cancel',
    submit: 'Submit'
  },
  
  hindi: {
    // Navigation
    dashboard: 'डैशबोर्ड',
    jobMatches: 'जॉब मैच',
    applications: 'आवेदन',
    toolkit: 'टूलकिट',
    jobController: 'जॉब कंट्रोलर',
    profile: 'प्रोफाइल',
    
    // Dashboard
    hello: 'नमस्ते',
    ready: 'अपने करियर को तेज़ी से बढ़ाने के लिए तैयार हैं? यहाँ आपका व्यक्तिगत जॉब सर्च डैशबोर्ड है।',
    today: 'आज',
    yourActivity: 'आपकी गतिविधि',
    jobsSearched: 'जॉब्स खोजे गए',
    applicationsSent: 'आवेदन भेजे गए',
    jobMatches: 'जॉब मैच',
    interviews: 'इंटरव्यू',
    thisWeek: 'इस सप्ताह',
    newMatches: 'नए मैच',
    upcoming: 'आगामी',
    
    // Recent Activities
    recentActivities: 'हाल की गतिविधियाँ',
    viewAll: 'सभी देखें',
    applied: 'आवेदन किया',
    matched: 'मैच किया',
    interview: 'इंटरव्यू',
    searched: 'खोजा',
    track: 'ट्रैक करें',
    applyNow: 'अभी आवेदन करें',
    prepare: 'तैयारी करें',
    viewResults: 'परिणाम देखें',
    
    // Quick Actions
    quickActions: 'त्वरित कार्य',
    updateProfile: 'प्रोफाइल अपडेट करें',
    updateProfileDesc: 'अपनी प्रोफाइल को ताज़ा रखें और बेहतर अवसर आकर्षित करें',
    careerTools: 'करियर टूल्स',
    careerToolsDesc: 'रिज्यूमे बिल्डर, इंटरव्यू की तैयारी, और स्किल असेसमेंट',
    jobSearch: 'जॉब सर्च',
    jobSearchDesc: 'नए अवसर खोजें और अपने आवेदनों को ट्रैक करें',
    
    // Job Applications
    myJobApplications: 'मेरे जॉब आवेदन',
    trackApplications: 'अपने सभी जॉब आवेदनों और उनकी वर्तमान स्थिति को ट्रैक करें',
    totalApplications: 'कुल आवेदन',
    underReview: 'समीक्षाधीन',
    offers: 'ऑफर',
    filterByStatus: 'स्थिति के अनुसार फ़िल्टर करें:',
    sortBy: 'इसके अनुसार क्रमबद्ध करें:',
    applicationDate: 'आवेदन तिथि',
    companyName: 'कंपनी का नाम',
    position: 'पद',
    status: 'स्थिति',
    allApplications: 'सभी आवेदन',
    interviewScheduled: 'इंटरव्यू निर्धारित',
    offerReceived: 'ऑफर प्राप्त',
    rejected: 'अस्वीकृत',
    withdrawn: 'वापस लिया गया',
    
    // Job Matches
    personalizedJobMatches: 'व्यक्तिगत जॉब मैच',
    jobMatchesDesc: 'आपके कौशल और प्राथमिकताओं के अनुरूप अवसर खोजें',
    
    // Settings
    settings: 'सेटिंग्स',
    theme: 'थीम',
    language: 'भाषा',
    light: 'उजला',
    dark: 'अंधेरा',
    
    // Common
    apply: 'आवेदन करें',
    save: 'सेव करें',
    viewDetails: 'विवरण देखें',
    followUp: 'फॉलो अप',
    withdraw: 'वापस लें',
    acceptOffer: 'ऑफर स्वीकार करें',
    close: 'बंद करें',
    edit: 'संपादित करें',
    cancel: 'रद्द करें',
    submit: 'जमा करें'
  },
  
  gujarati: {
    // Navigation
    dashboard: 'ડેશબોર્ડ',
    jobMatches: 'જોબ મેચ',
    applications: 'અરજીઓ',
    toolkit: 'ટૂલકિટ',
    jobController: 'જોબ કંટ્રોલર',
    profile: 'પ્રોફાઇલ',
    
    // Dashboard
    hello: 'નમસ્તે',
    ready: 'તમારી કારકિર્દીને ઝડપથી આગળ વધારવા માટે તૈયાર છો? અહીં તમારું વ્યક્તિગત જોબ સર્ચ ડેશબોર્ડ છે।',
    today: 'આજે',
    yourActivity: 'તમારી પ્રવૃત્તિ',
    jobsSearched: 'જોબ્સ શોધ્યા',
    applicationsSent: 'અરજીઓ મોકલેલ',
    jobMatches: 'જોબ મેચ',
    interviews: 'ઇન્ટરવ્યુ',
    thisWeek: 'આ અઠવાડિયે',
    newMatches: 'નવા મેચ',
    upcoming: 'આગામી',
    
    // Recent Activities
    recentActivities: 'તાજેતરની પ્રવૃત્તિઓ',
    viewAll: 'બધું જુઓ',
    applied: 'અરજી કરી',
    matched: 'મેચ થયો',
    interview: 'ઇન્ટરવ્યુ',
    searched: 'શોધ્યું',
    track: 'ટ્રેક કરો',
    applyNow: 'હવે અરજી કરો',
    prepare: 'તૈયારી કરો',
    viewResults: 'પરિણામો જુઓ',
    
    // Quick Actions
    quickActions: 'ઝડપી ક્રિયાઓ',
    updateProfile: 'પ્રોફાઇલ અપડેટ કરો',
    updateProfileDesc: 'તમારી પ્રોફાઇલને તાજી રાખો અને વધુ સારી તકો આકર્ષિત કરો',
    careerTools: 'કારકિર્દી ટૂલ્સ',
    careerToolsDesc: 'રિઝ્યુમે બિલ્ડર, ઇન્ટરવ્યુ તૈયારી, અને કુશળતા મૂલ્યાંકન',
    jobSearch: 'જોબ સર્ચ',
    jobSearchDesc: 'નવી તકો શોધો અને તમારી અરજીઓને ટ્રેક કરો',
    
    // Job Applications
    myJobApplications: 'મારી જોબ અરજીઓ',
    trackApplications: 'તમારી બધી જોબ અરજીઓ અને તેમની વર્તમાન સ્થિતિને ટ્રેક કરો',
    totalApplications: 'કુલ અરજીઓ',
    underReview: 'સમીક્ષા હેઠળ',
    offers: 'ઓફર',
    filterByStatus: 'સ્થિતિ અનુસાર ફિલ્ટર કરો:',
    sortBy: 'આના અનુસાર ક્રમ કરો:',
    applicationDate: 'અરજી તારીખ',
    companyName: 'કંપનીનું નામ',
    position: 'પદ',
    status: 'સ્થિતિ',
    allApplications: 'બધી અરજીઓ',
    interviewScheduled: 'ઇન્ટરવ્યુ નિર્ધારિત',
    offerReceived: 'ઓફર મળ્યો',
    rejected: 'નકારાયું',
    withdrawn: 'પાછી ખેંચી',
    
    // Job Matches
    personalizedJobMatches: 'વ્યક્તિગત જોબ મેચ',
    jobMatchesDesc: 'તમારી કુશળતા અને પસંદગીઓ અનુસાર તકો શોધો',
    
    // Settings
    settings: 'સેટિંગ્સ',
    theme: 'થીમ',
    language: 'ભાષા',
    light: 'પ્રકાશ',
    dark: 'અંધકાર',
    
    // Common
    apply: 'અરજી કરો',
    save: 'સેવ કરો',
    viewDetails: 'વિગતો જુઓ',
    followUp: 'ફોલો અપ',
    withdraw: 'પાછી ખેંચો',
    acceptOffer: 'ઓફર સ્વીકારો',
    close: 'બંધ કરો',
    edit: 'સંપાદિત કરો',
    cancel: 'રદ કરો',
    submit: 'સબમિટ કરો'
  }
}

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('english')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'english'
    setLanguage(savedLanguage)

    // Listen for language changes
    const handleLanguageChange = (event) => {
      setLanguage(event.detail)
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const t = (key) => {
    return translations[language]?.[key] || translations.english[key] || key
  }

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
