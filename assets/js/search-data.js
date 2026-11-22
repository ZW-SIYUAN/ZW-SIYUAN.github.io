// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Research manuscripts and publications. Submission status is shown for work under review.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects on online learning and LLM-based tabular data generation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Research software and tools for online learning, synthetic data, and paper discovery.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, publications, research and teaching experience, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and teaching assistant experience at William &amp; Mary.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-被讨厌的勇气-读书笔记-第一夜-我们的不幸是谁的错",
        
          title: "《被讨厌的勇气》读书笔记 · 第一夜：我们的不幸是谁的错？",
        
        description: "阿德勒的“目的论”如何反驳弗洛伊德的“原因论”——决定我们的不是过去的经历，而是我们赋予经历的意义。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/courage-to-be-disliked-night-one/";
          
        },
      },{id: "news-started-my-ph-d-in-data-science-at-william-amp-amp-mary-joining-the-sndm-lab-under-the-supervision-of-prof-yi-he-excited-to-begin-this-new-journey",
          title: 'Started my Ph.D. in Data Science at William &amp;amp;amp; Mary, joining the SNDM...',
          description: "",
          section: "News",},{id: "projects-openmoa",
          title: 'OpenMOA',
          description: "A Python Library for Utilitarian Online Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_openmoa/";
            },},{id: "projects-llm-for-tabular-data-generation",
          title: 'LLM for Tabular Data Generation',
          description: "Leveraging causal structure for high-fidelity synthetic tabular data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_llm_tabular/";
            },},{id: "projects-online-learning-from-heterogeneous-data-streams",
          title: 'Online Learning from Heterogeneous Data Streams',
          description: "Learning under irregular, drifting, and heterogeneous streaming conditions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_streaming_learning/";
            },},{id: "projects-tabcd",
          title: 'TabCD',
          description: "Exact constrained decoding for LLM-based tabular synthesis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tabcd/";
            },},{id: "teachings-computational-foundations-of-data-science",
          title: 'Computational Foundations of Data Science',
          description: "Prepare selected course slides, lead lab sessions, grade homework and lab assignments, and answer students&#39; questions.",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/2026-fall-data601/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Zhili_Wang_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%77%61%6E%67%36%38@%77%6D.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ZW-SIYUAN", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-5067-1026", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
