import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate programmer who specializes in integrating machine learning algorithms to create powerful applications and software APIs. I love transforming ideas into intelligent solutions.`;

export const ABOUT_TEXT = `I love exploring new machine learning techniques and have a deep interest in stochastic methods for finance, particularly in quantitative approaches. Outside academics I love spending time with my family which includes 20 cats, 2 dogs, my sister - Kc and parents.




This is an image of me instructing a class - CSCI 1913 (Introduction to DataStructures and Algorithms) at University of Minnesota, Twin Cities.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Software Engineering Contributor",
    company: "Datacurve",
    description: `Worked on the Shipd platform contributing challenging software engineering projects and developing efficient algorithmic solutions to enhance AI-driven code training models.`,
    technologies: ["React.js", "Flask", "Node.js", "Streamlit", "SQL", "git"],
  },
  {
    year: "August 2024 - Present",
    role: "Undergraduate Teaching Assistant",
    company: "University of Minnesota, Twin Cities",
    description: `Undergraduate Teaching Assistant for Advanced Programming, guiding students in functional programming, (CSCI 2041) and data structures/algorithms (CSCI 1913) through labs, office hours, and grading.`,
    technologies: ["Ocaml", "Python3", 'Java'],
  },
];

export const PROJECTS = [
  {
    title: "Transit API",
    image: project1,
    description:
      "Built a RESTful API using FastAPI to optimize NYC's public transit network with stochastic models and visualization tools.",
    technologies: ["FastAPI", "NetworkX", "Pandas", "Folium", "PuLP", "Seaborn"],
    link: "https://github.com/NathanBenches250/Optimized_Transit-API-NYC-",
  },
  {
     title: "Deep Learning Pneumonia Prediction App",
     image: project2,
     description:
       "Developed a Flask-based web app integrating deep learning models for pneumonia detection from X-ray images.",
    technologies: ["Flask", "FastAI", "Scikit-learn", "TensorFlow", "Keras", "Pillow", "JavaScript"],
     link: "https://github.com/NathanBenches250/DeepLearning_Pneumonia"
  },
  {
     title: "Big-Ten Fantasy Football",
     image: project3,
     description:
       "Created a full-stack fantasy football platform for Big 10 college football with React, Supabase, and real-time player stats.",
     technologies: ["React.js", "Python", "Supabase", "PostgreSQL"],
     link:"https://big-10-fantasy-football-dev-e991c0bb040a.herokuapp.com/",
   },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  //   link: "",
  // },
];

