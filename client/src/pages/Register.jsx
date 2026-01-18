import { useState, useRef } from "react";
import Toast from "../components/forms/Toast";
import TabSwitcher from "../components/register/TabSwitcher";
import InternshipForm from "../components/register/InternshipForm";
import ProjectForm from "../components/register/ProjectForm";
import AnimatedHero from "../components/register/AnimatedHero";
import { useToast } from "../hooks/useToast";
import "../styles/register.css";

/**
 * Main Register page component
 * Handles both Internship and Project registration forms
 */
const Register = () => {
  const [activeTab, setActiveTab] = useState("intern");
  
  // Internship form state
  const [internStep, setInternStep] = useState(1);
  const [internData, setInternData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    domain: "",
    duration: "",
    resume: null,
  });
  const [internErrors, setInternErrors] = useState({});
  const [internLoading, setInternLoading] = useState(false);
  
  // Project form state
  const [projectStep, setProjectStep] = useState(1);
  const [projectData, setProjectData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    projectTitle: "",
    techStack: "",
    projectDescription: "",
    budget: "",
  });
  const [projectErrors, setProjectErrors] = useState({});
  const [projectLoading, setProjectLoading] = useState(false);
  
  // Toast notification
  const { toast, showToast, hideToast } = useToast();

  // Ref for scrolling to form
  const formRef = useRef(null);

  const handleGetStarted = () => {
    if (formRef.current) {
      const element = formRef.current;
      // Responsive offset based on screen size
      const offset = window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 110 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleInternChange = (field, value) => {
    setInternData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (internErrors[field]) {
      setInternErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleProjectChange = (field, value) => {
    setProjectData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (projectErrors[field]) {
      setProjectErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleInternSubmitSuccess = () => {
    // Reset form on successful submission
    setInternData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      domain: "",
      duration: "",
      resume: null,
    });
    setInternStep(1);
    setInternErrors({});
  };

  const handleProjectSubmitSuccess = () => {
    // Reset form on successful submission
    setProjectData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      projectTitle: "",
      techStack: "",
      projectDescription: "",
      budget: "",
    });
    setProjectStep(1);
    setProjectErrors({});
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setInternStep(1);
    setProjectStep(1);
    setInternErrors({});
    setProjectErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4efff] to-white pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 md:px-6 pb-8 sm:pb-12 hide-scrollbar">
      {/* Animated Hero Section */}
      <AnimatedHero onGetStarted={handleGetStarted} />

      <div className="max-w-5xl mx-auto w-full" ref={formRef}>
        {/* Tabs */}
        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 transition-all animate-fade-in">
          {/* INTERN FORM */}
          {activeTab === "intern" && (
            <InternshipForm
              data={internData}
              errors={internErrors}
              step={internStep}
              loading={internLoading}
              onChange={handleInternChange}
              onStepChange={setInternStep}
              onLoadingChange={setInternLoading}
              onErrorsChange={setInternErrors}
              showToast={showToast}
              onSuccess={handleInternSubmitSuccess}
            />
          )}

          {/* PROJECT FORM */}
          {activeTab === "project" && (
            <ProjectForm
              data={projectData}
              errors={projectErrors}
              step={projectStep}
              loading={projectLoading}
              onChange={handleProjectChange}
              onStepChange={setProjectStep}
              onLoadingChange={setProjectLoading}
              onErrorsChange={setProjectErrors}
              showToast={showToast}
              onSuccess={handleProjectSubmitSuccess}
            />
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default Register;
