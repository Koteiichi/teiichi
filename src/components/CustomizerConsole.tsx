import React, { useState } from "react";
import { UserProfile, Project, Experience, StrengthCard } from "../types";
import { 
  Sliders, Eye, Plus, Trash2, Download, RefreshCw, X, Check, Save
} from "lucide-react";

interface CustomizerConsoleProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
  strengths: StrengthCard[];
  setStrengths: React.Dispatch<React.SetStateAction<StrengthCard[]>>;
  onReset: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CustomizerConsole: React.FC<CustomizerConsoleProps> = ({
  profile,
  setProfile,
  projects,
  setProjects,
  experiences,
  setExperiences,
  strengths,
  setStrengths,
  onReset,
  isOpen,
  setIsOpen,
}) => {
  const [activeTab, setActiveTab] = useState<"basics" | "projects" | "experience" | "philosophy">("basics");

  // Handle simple input changes
  const handleProfileChange = (field: keyof UserProfile, value: any) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleParagraphChange = (index: number, value: string) => {
    const updated = [...profile.aboutParagraphs];
    updated[index] = value;
    setProfile((prev) => ({
      ...prev,
      aboutParagraphs: updated,
    }));
  };

  const addParagraph = () => {
    setProfile((prev) => ({
      ...prev,
      aboutParagraphs: [...prev.aboutParagraphs, "New about segment row..."],
    }));
  };

  const removeParagraph = (index: number) => {
    const updated = profile.aboutParagraphs.filter((_, i) => i !== index);
    setProfile((prev) => ({
      ...prev,
      aboutParagraphs: updated,
    }));
  };

  // Projects modification
  const handleProjectChange = (id: string, field: keyof Project, value: any) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const addProject = () => {
    const newProj: Project = {
      id: `project-${Date.now()}`,
      title: "New Venture",
      subtitle: "Innovative Client Service",
      category: "Digital Craft",
      year: "2026",
      tags: ["Design", "React"],
      description: "A short, beautiful summary explaining the user needs, technical stack constraints, and visual resolution.",
      visualType: "dashboard",
      visualColor: profile.accentColor,
    };
    setProjects((prev) => [...prev, newProj]);
  };

  const removeProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Experience modification
  const handleExperienceChange = (id: string, field: keyof Experience, value: any) => {
    setExperiences((prev) =>
      prev.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: `exp-${Date.now()}`,
      company: "Innovate Corp",
      role: "Lead Creative Technologist",
      period: "2025 - Present",
      location: "San Francisco / Hybrid",
      description: "Spearheaded key visual modules, integrated robust micro-interaction animations, and oversaw product engineering.",
    };
    setExperiences((prev) => [...prev, newExp]);
  };

  const removeExperience = (id: string) => {
    setExperiences((prev) => prev.filter((e) => e.id !== id));
  };

  // Strengths modification
  const handleStrengthChange = (id: string, field: keyof StrengthCard, value: any) => {
    setStrengths((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  // Download raw template data
  const handleDownload = () => {
    const data = {
      profile,
      projects,
      experiences,
      strengths,
    };
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `${profile.name.toLowerCase().replace(/\s+/g, "_")}_portfolio_config.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const accentPresets = [
    { name: "Sleek Gold", hex: "#D4AF37", bgClass: "bg-[#D4AF37]" },
    { name: "Royal Purple", hex: "#8B5CF6", bgClass: "bg-[#8B5CF6]" },
    { name: "Forest Mint", hex: "#10B981", bgClass: "bg-[#10B981]" },
    { name: "Cozy Amber", hex: "#F59E0B", bgClass: "bg-[#F59E0B]" },
    { name: "Neon Cyan", hex: "#06B6D4", bgClass: "bg-[#06B6D4]" },
    { name: "Prism Rose", hex: "#FB7185", bgClass: "bg-[#FB7185]" },
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-neutral-900 border-l border-neutral-800 text-neutral-200 shadow-2xl z-50 flex flex-col font-sans"
      id="customizer-panel-root"
    >
      {/* Panel Header */}
      <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
        <div className="flex items-center gap-2.5">
          <Sliders className="w-5 h-5 text-neutral-400" id="icon-sliders-customizer" />
          <h2 className="text-sm font-semibold uppercase tracking-wider font-mono text-white">Live Customizer</h2>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 px-2.5 bg-neutral-900 hover:bg-neutral-800 rounded-md border border-neutral-800 text-neutral-400 hover:text-white transition-all text-xs font-mono"
          id="btn-close-customizer"
        >
          Close [ESC]
        </button>
      </div>

      {/* Segment Tabs */}
      <div className="grid grid-cols-4 border-b border-neutral-800 bg-neutral-950/50 text-xs font-mono">
        {(["basics", "projects", "experience", "philosophy"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-center border-b-2 capitalize transition-all ${
              activeTab === tab
                ? "border-amber-400 text-white bg-neutral-900/40"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
            id={`tab-button-${tab}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Editor Main Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        
        {/* TAB 1: BASIC BRANDING DETAILS */}
        {activeTab === "basics" && (
          <div className="space-y-5 animate-fade-in-up" id="tab-basics-content">
            <div>
              <span className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wide">Brand Color Accent</span>
              <div className="grid grid-cols-6 gap-2">
                {accentPresets.map((preset) => (
                  <button
                    key={preset.hex}
                    onClick={() => handleProfileChange("accentColor", preset.hex)}
                    title={preset.name}
                    className={`h-9 rounded-md transition-all flex items-center justify-center border ${
                      profile.accentColor === preset.hex 
                        ? "border-white scale-110 shadow-lg ring-2 ring-white/10" 
                        : "border-neutral-800 hover:scale-105"
                    } ${preset.bgClass}`}
                    id={`preset-color-${preset.hex.replace("#", "")}`}
                  >
                    {profile.accentColor === preset.hex && (
                      <Check className="w-4 h-4 text-neutral-900 stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-500">Custom Hex:</span>
                <input
                  type="text"
                  value={profile.accentColor}
                  onChange={(e) => handleProfileChange("accentColor", e.target.value)}
                  className="bg-neutral-950 border border-neutral-800 rounded px-2 py-1 text-xs font-mono text-white max-w-[120px]"
                  id="input-custom-hex"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Theme Environment</label>
                <select
                  value={profile.theme}
                  onChange={(e) => handleProfileChange("theme", e.target.value as "dark" | "light")}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 text-xs font-mono text-white"
                  id="select-theme"
                >
                  <option value="dark">Dark Slate (Classic baicheramy)</option>
                  <option value="light">Pristine Light (Warm Minimalist)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Timezone Location</label>
                <select
                  value={profile.timezone}
                  onChange={(e) => handleProfileChange("timezone", e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 text-xs font-mono text-white"
                  id="select-timezone"
                >
                  <option value="Africa/Algiers">Africa/Algiers (Algiers)</option>
                  <option value="Asia/Shanghai">Asia/Shanghai (Beijing)</option>
                  <option value="Asia/Tokyo">Asia/Tokyo (Tokyo)</option>
                  <option value="Europe/Paris">Europe/Paris (Paris)</option>
                  <option value="America/New_York">America/New_York (New York)</option>
                  <option value="Europe/London">Europe/London (London)</option>
                  <option value="Asia/Singapore">Asia/Singapore (Singapore)</option>
                </select>
              </div>
            </div>

            <hr className="border-neutral-800" />

            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase tracking-wide">Main English Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileChange("name", e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-sm font-sans font-medium text-white"
                id="input-full-name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Arabic/Native Script Name</label>
                <input
                  type="text"
                  value={profile.nativeName}
                  onChange={(e) => handleProfileChange("nativeName", e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-sm font-arabic font-semibold text-white"
                  dir="rtl"
                  id="input-native-name"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Native Script Type</label>
                <input
                  type="text"
                  value={profile.nativeLanguage}
                  onChange={(e) => handleProfileChange("nativeLanguage", e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-sm text-white"
                  id="input-native-lang"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1">Headline Job Title</label>
              <input
                type="text"
                value={profile.title}
                onChange={(e) => handleProfileChange("title", e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-sm text-white"
                id="input-job-title"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1">Landing Bio Paragraph</label>
              <textarea
                rows={3}
                value={profile.bio}
                onChange={(e) => handleProfileChange("bio", e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-xs text-white resize-y"
                id="textarea-landing-bio"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1">Current City / Country</label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleProfileChange("location", e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-sm text-white"
                id="input-location"
              />
            </div>

            <hr className="border-neutral-800" />

            {/* Social Network URLs */}
            <div className="space-y-3">
              <span className="block text-xs font-mono text-neutral-400 uppercase tracking-wide">Social & Professional Channels</span>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Contact Email</label>
                  <input
                    type="text"
                    value={profile.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-xs font-mono text-white"
                    id="input-social-email"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Resume Link</label>
                  <input
                    type="text"
                    value={profile.resumeUrl}
                    onChange={(e) => handleProfileChange("resumeUrl", e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-xs font-mono text-white"
                    id="input-social-resume"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-neutral-500">GitHub Profile</label>
                  <input
                    type="text"
                    value={profile.githubUrl}
                    onChange={(e) => handleProfileChange("githubUrl", e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-xs font-mono text-white"
                    id="input-social-github"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Twitter URL</label>
                  <input
                    type="text"
                    value={profile.twitterUrl}
                    onChange={(e) => handleProfileChange("twitterUrl", e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-xs font-mono text-white"
                    id="input-social-twitter"
                  />
                </div>
              </div>
            </div>

            <hr className="border-neutral-800" />

            {/* Paragraphs write-up */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="block text-xs font-mono text-neutral-400 uppercase tracking-wide">Full About Me Story Lines</span>
                <button
                  onClick={addParagraph}
                  className="text-xs text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1"
                  id="btn-add-paragraph"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Row
                </button>
              </div>

              {profile.aboutParagraphs.map((para, idx) => (
                <div key={idx} className="relative group/para border border-neutral-800 p-2 rounded bg-neutral-950">
                  <span className="absolute -top-2 left-2 bg-neutral-900 px-1 text-[8px] font-mono text-neutral-500">Segment #{idx + 1}</span>
                  <textarea
                    rows={3}
                    value={para}
                    onChange={(e) => handleParagraphChange(idx, e.target.value)}
                    className="w-full bg-transparent p-1 pt-2.5 text-xs text-neutral-300 outline-none resize-y"
                    id={`textarea-story-segment-${idx}`}
                  />
                  <button
                    onClick={() => removeParagraph(idx)}
                    className="absolute top-2 right-2 p-1 text-red-400 hover:text-red-300 rounded opacity-0 group-hover/para:opacity-100 transition-opacity bg-neutral-900/80 border border-neutral-800"
                    title="Remove segment"
                    id={`btn-remove-segment-${idx}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PORTFOLIO MAIN PROJECTS */}
        {activeTab === "projects" && (
          <div className="space-y-4 animate-fade-in-up" id="tab-projects-content">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Project Case Studies ({projects.length})</span>
              <button
                onClick={addProject}
                className="px-2.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-xs font-mono text-amber-400 hover:text-amber-350 border border-neutral-700 flex items-center gap-1"
                id="btn-add-project"
              >
                <Plus className="w-3.5 h-3.5" /> New Project
              </button>
            </div>

            {projects.map((proj, idx) => (
              <div key={proj.id} className="border border-neutral-800 rounded bg-neutral-950 p-4 space-y-4 relative group/proj">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-500">#{idx + 1}</span>
                  <button
                    onClick={() => removeProject(proj.id)}
                    className="p-1 px-1.5 bg-neutral-900 hover:bg-red-950 border border-neutral-800 hover:border-red-900 text-neutral-500 hover:text-red-400 rounded transition-all"
                    title="Delete Case Study"
                    id={`btn-delete-proj-${proj.id}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Project Title</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => handleProjectChange(proj.id, "title", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      id={`input-proj-title-${proj.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Hero Subtitle</label>
                    <input
                      type="text"
                      value={proj.subtitle}
                      onChange={(e) => handleProjectChange(proj.id, "subtitle", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      id={`input-proj-subtitle-${proj.id}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">System Tag</label>
                    <input
                      type="text"
                      value={proj.category}
                      onChange={(e) => handleProjectChange(proj.id, "category", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-xs text-neutral-300"
                      id={`input-proj-category-${proj.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Project Year</label>
                    <input
                      type="text"
                      value={proj.year}
                      onChange={(e) => handleProjectChange(proj.id, "year", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-xs text-white"
                      id={`input-proj-year-${proj.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Vector Seed</label>
                    <select
                      value={proj.visualType}
                      onChange={(e) => handleProjectChange(proj.id, "visualType", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-xs text-white"
                      id={`select-proj-vectortype-${proj.id}`}
                    >
                      <option value="dashboard">Dashboard Grid</option>
                      <option value="data-flow">Data Flow Chart</option>
                      <option value="mesh">Concentric Mesh</option>
                      <option value="architecture">Engineering blueprint</option>
                      <option value="organic">Organic Swell</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Case Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={proj.tags.join(", ")}
                    onChange={(e) => handleProjectChange(proj.id, "tags", e.target.value.split(",").map(s => s.trim()))}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                    placeholder="B2B SaaS, User Flow, NextJS"
                    id={`input-proj-tags-${proj.id}`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Visual Core Accent</label>
                    <input
                      type="color"
                      value={proj.visualColor}
                      onChange={(e) => handleProjectChange(proj.id, "visualColor", e.target.value)}
                      className="w-full h-8 bg-neutral-900 border border-neutral-800 rounded px-1 cursor-pointer"
                      id={`input-proj-color-${proj.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Project Link</label>
                    <input
                      type="text"
                      value={proj.projectUrl || ""}
                      onChange={(e) => handleProjectChange(proj.id, "projectUrl", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      placeholder="#"
                      id={`input-proj-url-${proj.id}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Meticulous Case Description</label>
                  <textarea
                    rows={2}
                    value={proj.description}
                    onChange={(e) => handleProjectChange(proj.id, "description", e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-neutral-300 resize-y"
                    id={`textarea-proj-description-${proj.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: WORK HISTORY / EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="space-y-4 animate-fade-in-up" id="tab-experience-content">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Professional Footprint ({experiences.length})</span>
              <button
                onClick={addExperience}
                className="px-2.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-xs font-mono text-amber-400 hover:text-amber-350 border border-neutral-700 flex items-center gap-1"
                id="btn-add-experience"
              >
                <Plus className="w-3.5 h-3.5" /> New Role
              </button>
            </div>

            {experiences.map((exp, idx) => (
              <div key={exp.id} className="border border-neutral-800 rounded bg-neutral-950 p-4 space-y-3.5 relative">
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="absolute top-4 right-4 p-1 bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-500 hover:text-red-400 rounded transition-all"
                  title="Delete Role"
                  id={`btn-delete-exp-${exp.id}`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Company Name</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      id={`input-exp-company-${exp.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Role Designation</label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => handleExperienceChange(exp.id, "role", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      id={`input-exp-role-${exp.id}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Timeline / Period</label>
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => handleExperienceChange(exp.id, "period", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      placeholder="2024 - Present"
                      id={`input-exp-period-${exp.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Location Office</label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      placeholder="Remote / New York"
                      id={`input-exp-location-${exp.id}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Key Achievements & Activities</label>
                  <textarea
                    rows={2}
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-neutral-305 resize-y"
                    id={`textarea-exp-description-${exp.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: PHILOSOPHY & CAPABILITY CARDS */}
        {activeTab === "philosophy" && (
          <div className="space-y-4 animate-fade-in-up" id="tab-philosophy-content">
            <span className="block text-xs font-mono text-neutral-400 uppercase tracking-wide mb-2">Bento Strengths & Beliefs Grid (4 Cards)</span>

            {strengths.map((str) => (
              <div key={str.id} className="border border-neutral-800 rounded bg-neutral-950 p-4 space-y-3">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">{str.title}</span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Belief Heading</label>
                    <input
                      type="text"
                      value={str.title}
                      onChange={(e) => handleStrengthChange(str.id, "title", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs font-semibold text-white"
                      id={`input-strength-title-${str.id}`}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-neutral-500">Slogan Accent</label>
                    <input
                      type="text"
                      value={str.subtitle}
                      onChange={(e) => handleStrengthChange(str.id, "subtitle", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1 text-xs text-white"
                      id={`input-strength-subtitle-${str.id}`}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Strength Description</label>
                  <textarea
                    rows={3}
                    value={str.description}
                    onChange={(e) => handleStrengthChange(str.id, "description", e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-xs text-neutral-300 resize-y"
                    id={`textarea-strength-desc-${str.id}`}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-neutral-500">Lucide Icon Class</label>
                  <select
                    value={str.iconName}
                    onChange={(e) => handleStrengthChange(str.id, "iconName", e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-xs text-white"
                    id={`select-strength-icon-${str.id}`}
                  >
                    <option value="Sparkles">Sparkles (Intuitive Art)</option>
                    <option value="Layers">Layers (Design Systems)</option>
                    <option value="Target">Target (Strategy & Focus)</option>
                    <option value="Code">Code (Front-end Handoff)</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Panel Footer Controls */}
      <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex flex-col gap-2">
        <button
          onClick={handleDownload}
          className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700/80 rounded font-mono text-xs text-white font-medium flex items-center justify-center gap-1.5 border border-neutral-700 transition-all shadow-md active:translate-y-px"
          id="btn-download-config"
        >
          <Download className="w-4 h-4 text-neutral-400" id="icon-download-customizer" />
          Download Portfolio JSON
        </button>
        <button
          onClick={onReset}
          className="w-full py-2 bg-transparent hover:bg-neutral-900 text-neutral-400 hover:text-red-400 text-xs font-mono flex items-center justify-center gap-1.5 border border-dashed border-neutral-800 hover:border-neutral-700 transition-all rounded"
          id="btn-reset-defaults"
        >
          <RefreshCw className="w-3.5 h-3.5 text-neutral-500" id="icon-reset-customizer" />
          Reset to Baicheramy Defaults
        </button>
      </div>
    </div>
  );
};
