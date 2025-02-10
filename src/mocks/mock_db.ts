const replies = {
  '1': [
    {
      post_id: 1,
      reply_id: 1,
      user_id: 10,
      username: 'DrElenaPetrovic',
      first_name: 'Elena',
      last_name: 'Petrovic',
      avatar: '/public/assets/users/10.jpg',
      role: 'mentor',
      content:
        "<p>Great topic! I've used ARIMA extensively in my research.</p> <p>Would you be interested in exploring hybrid approaches, such as combining ARIMA with LSTMs?</p>",
      timestamp: '2025-01-28T11:15:00Z',
      likes: {},
    },
  ],
  '2': [
    {
      post_id: 2,
      reply_id: 2,
      user_id: 9,
      username: 'ProfRahulDeshmukh',
      first_name: 'Rahul',
      last_name: 'Deshmukh',
      avatar: '/public/assets/users/9.jpg',
      role: 'mentor',
      content:
        "<p>Interesting question! I've seen some promising work in integrating logic-based reasoning into deep learning models.</p> <p>Do you have any thoughts on how these hybrid models handle uncertainty?</p>",
      timestamp: '2025-01-29T14:00:00Z',
      likes: {},
    },
  ],
  '3': [
    {
      post_id: 3,
      reply_id: 3,
      user_id: 8,
      username: 'DrTatianaOrlova',
      first_name: 'Tatiana',
      last_name: 'Orlova',
      avatar: '/public/assets/users/8.jpg',
      role: 'mentor',
      content:
        '<p>I recommend checking out the Global Biodiversity Information Facility (GBIF).</p> <p>It provides a wealth of publicly available biodiversity data.</p>',
      timestamp: '2025-01-30T09:20:00Z',
      likes: {},
    },
  ],
  '4': [
    {
      post_id: 4,
      reply_id: 4,
      user_id: 7,
      username: 'ProfYusufAbdelaziz',
      first_name: 'Yusuf',
      last_name: 'Abdelaziz',
      avatar: '/public/assets/users/7.jpg',
      role: 'mentor',
      content:
        '<p>One effective method is collaborating with policy think tanks.</p> <p>They help bridge the gap between research and policy implementation.</p>',
      timestamp: '2025-02-01T18:10:00Z',
      likes: {},
    },
  ],
  '5': [
    {
      post_id: 5,
      reply_id: 5,
      user_id: 6,
      username: 'DrAnayaMendoza',
      first_name: 'Anaya',
      last_name: 'Mendoza',
      avatar: '/public/assets/users/6.jpg',
      role: 'mentor',
      content:
        '<p>Look into the NIH and Marie Curie fellowships.</p> <p>They have great funding opportunities for neuroscience research.</p>',
      timestamp: '2025-02-02T12:30:00Z',
      likes: {},
    },
  ],
  '6': [
    {
      post_id: 6,
      reply_id: 6,
      user_id: 5,
      username: 'DrKojiTanaka',
      first_name: 'Koji',
      last_name: 'Tanaka',
      avatar: '/public/assets/users/5.jpg',
      role: 'mentor',
      content:
        "<p>Strogatz's 'Nonlinear Dynamics and Chaos' is an excellent choice.</p> <p>It's both comprehensive and beginner-friendly.</p>",
      timestamp: '2025-02-03T15:45:00Z',
      likes: {},
    },
  ],
  '7': [
    {
      post_id: 7,
      reply_id: 7,
      user_id: 4,
      username: 'DrNaimaRahmani',
      first_name: 'Naima',
      last_name: 'Rahmani',
      avatar: '/public/assets/users/4.jpg',
      role: 'mentor',
      content:
        '<p>I recommend using PyMC3 for Bayesian modeling.</p> <p>It has a great suite of tools for MCMC methods.</p>',
      timestamp: '2025-02-04T18:00:00Z',
      likes: {},
    },
  ],
  '8': [
    {
      post_id: 8,
      reply_id: 8,
      user_id: 6,
      username: 'DrAnayaMendoza',
      first_name: 'Anaya',
      last_name: 'Mendoza',
      avatar: '/public/assets/users/6.jpg',
      role: 'mentor',
      content:
        "<p>Fascinating research, Dr. Rahmani! How does your approach compare with Shor's error correction algorithm?</p>",
      timestamp: '2025-02-05T16:10:00Z',
      likes: {},
    },
  ],
  '9': [
    {
      post_id: 9,
      reply_id: 9,
      user_id: 7,
      username: 'ProfYusufAbdelaziz',
      first_name: 'Yusuf',
      last_name: 'Abdelaziz',
      avatar: '/public/assets/users/7.jpg',
      role: 'mentor',
      content:
        "<p>Great question! One key element is a **clear problem statement**. If you can articulate the research problem in two concise sentences, you're on the right track.</p>",
      timestamp: '2025-02-06T11:00:00Z',
      likes: { 1: true, 2: true, 3: true, 4: true, 5: true },
    },
    {
      post_id: 9,
      reply_id: 10,
      user_id: 9,
      username: 'ProfRahulDeshmukh',
      first_name: 'Rahul',
      last_name: 'Deshmukh',
      avatar: '/public/assets/users/9.jpg',
      role: 'mentor',
      content:
        "<p>I'd recommend including a **strong methodology section** that explicitly outlines data collection and analysis techniques.</p>",
      timestamp: '2025-02-06T11:20:00Z',
      likes: { 2: true, 3: true, 4: true },
    },
  ],
  '10': null,
}

const users = {
  '1': {
    user_id: 1,
    username: 'franksheikh',
    first_name: 'Frank',
    last_name: 'Sheikh',
    email: 'fahdsheikh@my.unthsc.edu',
    avatar: '/public/assets/users/authUser.jpg',
    role: 'mentee',
    city: 'Fort Worth',
    state: 'Texas',
    university: 'University of North Texas Health Science Center',
    title: 'Graduate Student',
    areas_of_focus: ['Biomedical Science', 'Public Health'],
    badge: 120,
    about: `
      <p>Frank Sheikh is a human person.</p>
      <br/>
      <p>Frank enjoys quiet settings and doing good things.</p>
    `,
  },

  '2': {
    user_id: 2,
    username: 'DrMiriamKovács',
    first_name: 'Miriam',
    last_name: 'Kovács',
    email: 'mateosilva@houston.edu',
    avatar: '/public/assets/users/2.jpg',
    role: 'mentor',
    city: 'Budapest',
    state: 'Hungary',
    university: 'Semmelweis University',
    title: 'Senior Researcher',
    areas_of_focus: [
      'Biomedical Science',
      'Artificial Intelligence',
      'Oncology',
    ],
    badge: 290,
    about: `<p>Dr. Miriam Kovács is a senior researcher at Semmelweis University in Budapest, Hungary, where she specializes in biomedical science and artificial intelligence. With a background in oncology, she has spent years developing AI-driven models for early cancer detection and improving diagnostic accuracy in medical imaging.</p>
    <br/>
      <p>Her research is centered around applying machine learning techniques to analyze histopathological data, allowing for more efficient and accurate disease diagnosis. By combining her expertise in biomedical science with advancements in artificial intelligence, she has contributed to innovative screening tools that assist medical professionals in identifying malignancies at an earlier stage.</p>
    <br/>
      <p>Dr. Kovács is particularly interested in the ethical implications of AI in healthcare, ensuring that automated systems remain transparent, unbiased, and accessible to all patients. She has worked on multiple projects that integrate deep learning algorithms into medical workflows while maintaining a strong emphasis on patient-centered care.</p>
    <br/>
      <p>Beyond her research, Dr. Kovács is an advocate for interdisciplinary collaboration. She regularly collaborates with radiologists, data scientists, and software engineers to develop tools that bridge the gap between technology and clinical practice. She also mentors students and young researchers, guiding them on how to approach the intersection of AI and medicine responsibly.</p>`,
  },

  '3': {
    user_id: 3,
    username: 'ProfLorenzoFerraro',
    first_name: 'Lorenzo',
    last_name: 'Ferraro',
    email: 'lorenzoferraro@houston.edu',
    avatar: '/public/assets/users/3.jpg',
    role: 'mentor',
    city: 'Rome',
    state: 'Italy',
    university: 'Sapienza University of Rome',
    title: 'Professor of Research Methodology',
    areas_of_focus: ['Anthropology', 'Social Sciences', 'Research Methodology'],
    badge: 275,
    about: `<p>Professor Lorenzo Ferraro is a highly respected academic at Sapienza University of Rome, where he teaches research methodology and its applications across anthropology and social sciences. His work focuses on refining qualitative and quantitative research techniques, helping students and professionals conduct more rigorous and impactful studies.</p>
    <br/>
      <p>With over two decades of experience in academia, Prof. Ferraro has played a key role in structuring research frameworks that apply to both social and behavioral sciences. He is known for his extensive contributions to ethnographic studies, survey research, and mixed-methods analysis. His expertise has helped bridge the gap between theoretical models and practical applications in anthropology.</p>
    <br/>
      <p>One of his main research interests is the evolution of human societies and how cultural patterns influence behavior. He has conducted field research in multiple regions, analyzing how traditions shape modern social structures. His work also extends to examining policy development, particularly in the areas of cultural preservation and social justice.</p>
    <br/>
      <p>Prof. Ferraro is a dedicated mentor to graduate students, helping them refine their research proposals, develop data collection methodologies, and analyze complex datasets. Many of his mentees have gone on to publish significant studies in the fields of social sciences and public policy.</p>
    <br/>
      <p>He is a frequent contributor to research publications, has served as a peer reviewer for academic journals, and often presents at global research conferences. His insights into interdisciplinary methodologies have been instrumental in shaping how anthropological research is conducted in modern times.</p>`,
  },
  '4': {
    user_id: 4,
    username: 'DrNaimaRahmani',
    first_name: 'Naima',
    last_name: 'Rahmani',
    email: 'naimarahmani@houston.edu',
    avatar: '/public/assets/users/4.jpg',
    role: 'mentor',
    city: 'Casablanca',
    state: 'Morocco',
    university: 'University of Casablanca',
    title: 'Quantum Computing Researcher',
    areas_of_focus: ['Quantum Computing', 'Physics', 'Applied Mathematics'],
    badge: 315,
    about: `<p>Dr. Naima Rahmani is a distinguished quantum computing researcher based at the University of Casablanca. Her expertise lies at the intersection of quantum mechanics, applied mathematics, and computational physics, where she is working to push the boundaries of quantum information science.</p>
    <br/>
    <p>Dr. Rahmani’s research focuses on developing advanced error correction algorithms for quantum circuits, ensuring that quantum computations remain stable and reliable. She has been instrumental in studying how noise in quantum processors can be minimized, making quantum computing more viable for real-world applications.</p>
    <br/>
    <p>Her journey into quantum physics began during her undergraduate studies when she became fascinated by the paradoxes of quantum mechanics. This passion led her to pursue a doctorate in quantum information theory, where she investigated how entanglement can be leveraged for secure communications.</p>
    <br/>
    <p>At the University of Casablanca, she leads a research group dedicated to exploring quantum algorithms for solving complex optimization problems. Her team has collaborated with international institutions to develop new quantum cryptographic protocols that could revolutionize data security in the digital age.</p>
    <br/>
    <p>Dr. Rahmani is also a strong advocate for increasing diversity in STEM fields. She actively mentors young women in science, encouraging them to pursue careers in physics and technology. She believes that quantum computing will play a crucial role in shaping the future of artificial intelligence, materials science, and secure communications.</p>`,
  },

  '5': {
    user_id: 5,
    username: 'DrKojiTanaka',
    first_name: 'Koji',
    last_name: 'Tanaka',
    email: 'kojitanaka@houston.edu',
    avatar: '/public/assets/users/5.jpg',
    role: 'mentor',
    city: 'Kyoto',
    state: 'Japan',
    university: 'Kyoto University',
    title: 'Professor of Statistics',
    areas_of_focus: ['Bayesian Statistics', 'Data Science', 'Machine Learning'],
    badge: 260,
    about: `<p>Dr. Koji Tanaka is a professor of statistics at Kyoto University, specializing in Bayesian statistics, machine learning, and data-driven decision-making. His expertise lies in statistical modeling and probabilistic inference, which he applies to fields ranging from finance to medical diagnostics.</p>
        <br/>

    <p>His academic career began with a deep curiosity about probability theory and its role in real-world applications. Over the years, he has developed statistical models that improve decision-making in uncertain environments, particularly within the domains of healthcare and artificial intelligence.</p>
    <br/>
    <p>Dr. Tanaka’s research has focused on the application of Bayesian methods to large-scale data problems. His work has significantly contributed to the development of machine learning models that adapt to new information in real time. He is particularly interested in how Bayesian approaches can refine AI models by incorporating uncertainty into their predictions.</p>
    <br/>
    <p>At Kyoto University, he leads a research group that collaborates with industries such as fintech, pharmaceuticals, and autonomous systems. His team has worked on projects that optimize predictive analytics for risk assessment, using probabilistic techniques to enhance decision-making accuracy.</p>
    <br/>
    <p>Dr. Tanaka is also a passionate educator, guiding students in advanced statistics, computational modeling, and artificial intelligence applications. He has mentored several PhD candidates, many of whom have gone on to make significant contributions in academia and industry.</p>`,
  },

  '6': {
    user_id: 6,
    username: 'DrAnayaMendoza',
    first_name: 'Anaya',
    last_name: 'Mendoza',
    email: 'anayamendoza@houston.edu',
    avatar: '/public/assets/users/6.jpg',
    role: 'mentor',
    city: 'Mexico City',
    state: 'Mexico',
    university: 'National Autonomous University of Mexico',
    title: 'Mathematical Physicist',
    areas_of_focus: ['Nonlinear Dynamics', 'Mathematical Modeling', 'Physics'],
    badge: 280,
    about: `<p>Dr. Anaya Mendoza is a leading mathematical physicist at the National Autonomous University of Mexico, where she specializes in nonlinear dynamics and mathematical modeling. Her work bridges the gap between theoretical physics and practical applications in engineering and natural sciences.</p>
    <br/>
    <p>From a young age, Dr. Mendoza was drawn to the beauty of mathematics and its ability to describe the physical world. This passion led her to pursue a career in mathematical physics, where she explores complex systems and their underlying mathematical structures.</p>
    <br/>
    <p>Her research focuses on nonlinear systems, with applications in fluid dynamics, chaos theory, and complex networks. She has developed mathematical models to predict phenomena such as turbulence, ecological interactions, and even traffic flow dynamics.</p>
    <br/>
    <p>At the National Autonomous University of Mexico, she heads a research group that collaborates with scientists in climate modeling, engineering, and computational physics. Her interdisciplinary approach has led to breakthroughs in understanding how small perturbations can lead to large-scale changes in dynamic systems.</p>`,
  },
  '7': {
    user_id: 7,
    username: 'ProfYusufAbdelaziz',
    first_name: 'Yusuf',
    last_name: 'Abdelaziz',
    email: 'yusufabdelaziz@houston.edu',
    avatar: '/public/assets/users/7.jpg',
    role: 'mentor',
    city: 'Cairo',
    state: 'Egypt',
    university: 'Cairo University',
    title: 'Neuroscience Professor',
    areas_of_focus: ['Computational Neuroscience', 'Neuroinformatics'],
    badge: 300,
    about: `<p>Professor Yusuf Abdelaziz is a leading figure in the field of computational neuroscience, currently serving as a professor at Cairo University. His research is dedicated to understanding the complex mechanisms of the human brain using computational models and neuroinformatics tools.</p>
    <br/>
    <p>His academic journey began with a fascination for how neural networks process information, leading him to specialize in brain-computer interfaces and cognitive modeling. Over the years, he has contributed to groundbreaking studies on neural connectivity and the computational principles underlying human cognition.</p>
    <br/>
    <p>At Cairo University, Professor Abdelaziz leads an interdisciplinary research team exploring neuroinformatics approaches to decode brain signals. His work has applications in neuroprosthetics, brain-machine interfaces, and neurological disorder treatments, helping bridge the gap between neuroscience and artificial intelligence.</p>
    <br/>
    <p>His research delves into how computational models can simulate brain plasticity and learning mechanisms, offering insights into conditions like Alzheimer's disease, epilepsy, and neurodevelopmental disorders. His recent work has focused on using deep learning to analyze massive neural datasets, paving the way for more precise diagnostics in neurology.</p>
    <br/>
    <p>Beyond academia, he collaborates with leading medical institutions and AI researchers to develop adaptive brain-computer interface systems. His work has been instrumental in advancing assistive technology, allowing individuals with motor impairments to communicate through brainwave-controlled devices.</p>
    <br/>
    <p>Professor Abdelaziz is also deeply committed to education and mentorship, offering courses on neuroinformatics, machine learning for neuroscience, and computational modeling. His students have gone on to contribute significantly to neurotechnology and AI research.</p>`,
  },

  '8': {
    user_id: 8,
    username: 'DrTatianaOrlova',
    first_name: 'Tatiana',
    last_name: 'Orlova',
    email: 'tatianaorlova@houston.edu',
    avatar: '/public/assets/users/8.jpg',
    role: 'mentor',
    city: 'Moscow',
    state: 'Russia',
    university: 'Lomonosov Moscow State University',
    title: 'Policy Researcher',
    areas_of_focus: ['Public Policy', 'Climate Adaptation', 'Social Sciences'],
    badge: 270,
    about: `<p>Dr. Tatiana Orlova is a policy researcher and social scientist at Lomonosov Moscow State University. Her work focuses on the intersection of public policy, climate adaptation, and social resilience, where she develops strategies to address climate change through effective governance and community engagement.</p>
    <br/>
    <p>Dr. Orlova’s academic background combines political science, sociology, and environmental studies. Her research is dedicated to understanding how policy interventions can mitigate the effects of climate change and enhance societal preparedness for environmental challenges.</p>
    <br/>
    <p>She has worked extensively on policy frameworks that help governments design adaptive measures for climate-related disasters. Her contributions to climate adaptation strategies have been recognized globally, particularly in emerging economies where the impacts of climate change are most severe.</p>
    <br/>
    <p>Her research also explores the socio-political dimensions of environmental sustainability, examining how public perception and policy implementation influence climate action. She has been involved in projects that assess the effectiveness of global climate agreements and their impact on national policies.</p>
    <br/>
    <p>Dr. Orlova is a firm believer in evidence-based policymaking and collaborates with policymakers, non-governmental organizations, and international agencies to develop data-driven solutions for climate resilience. She frequently provides consultations to government agencies on sustainable urban planning and disaster preparedness.</p>
    <br/>
    <p>She is actively involved in educational initiatives, mentoring students and young professionals in public policy research. Her lectures on climate governance and social adaptation strategies are widely attended by students from diverse academic backgrounds.</p>`,
  },

  '9': {
    user_id: 9,
    username: 'ProfRahulDeshmukh',
    first_name: 'Rahul',
    last_name: 'Deshmukh',
    email: 'rahuldeshmukh@houston.edu',
    avatar: '/public/assets/users/9.jpg',
    role: 'mentor',
    city: 'New Delhi',
    state: 'India',
    university: 'Indian Institute of Science',
    title: 'Professor of Ecology',
    areas_of_focus: ['Biodiversity', 'Conservation Science', 'Ecology'],
    badge: 295,
    about: `<p>Professor Rahul Deshmukh is a leading ecologist and conservation scientist at the Indian Institute of Science, specializing in biodiversity research and environmental conservation. His work focuses on preserving fragile ecosystems and understanding the intricate relationships between species and their habitats.</p>
    <br/>
    <p>His passion for ecology began during his early years when he spent time studying India’s diverse landscapes and wildlife. This led him to pursue a career in conservation science, where he has worked extensively on biodiversity assessments and habitat restoration projects.</p>
    <br/>
    <p>Professor Deshmukh’s research explores the impacts of climate change, deforestation, and human activity on biodiversity. He has led several initiatives aimed at protecting endangered species and restoring ecological balance in areas affected by environmental degradation.</p>
    <br/>
    <p>At the Indian Institute of Science, he directs research efforts that integrate ecological modeling with real-world conservation efforts. His team collaborates with government agencies, wildlife organizations, and international conservation groups to develop sustainable strategies for protecting biodiversity.</p>
    <br/>
    <p>His studies on ecosystem resilience have provided valuable insights into how species adapt to changing environmental conditions. He has worked on projects that analyze genetic diversity within populations to predict their survival chances in response to climate stressors.</p>
    <br/>
    <p>Beyond academia, Professor Deshmukh has played a key role in drafting environmental policies and advocating for stronger conservation laws. He frequently advises governmental bodies on ecological restoration projects and protected area management.</p>`,
  },
  '10': {
    user_id: 10,
    username: 'DrElenaPetrovic',
    first_name: 'Elena',
    last_name: 'Petrovic',
    email: 'elenapetrovic@houston.edu',
    avatar: '/public/assets/users/10.jpg',
    role: 'mentor',
    city: 'Belgrade',
    state: 'Serbia',
    university: 'University of Belgrade',
    title: 'AI Researcher',
    areas_of_focus: ['Neural Networks', 'AI Ethics', 'Symbolic AI'],
    badge: 310,
    about: `<p>Dr. Elena Petrovic is a distinguished AI researcher at the University of Belgrade, specializing in neural networks, AI ethics, and symbolic artificial intelligence. Her research lies at the intersection of machine learning and human-centered AI, where she explores the ethical implications of automation and decision-making.</p>
    <br/>
    <p>With a strong academic foundation in artificial intelligence, Dr. Petrovic has been at the forefront of discussions on explainable AI and algorithmic transparency. Her work delves into how deep learning models can be made more interpretable while ensuring fairness and accountability in automated systems.</p>
    <br/>
    <p>She has worked on numerous projects that address bias in machine learning algorithms, striving to develop equitable AI models that mitigate social and economic disparities. One of her most notable contributions is a framework for ensuring ethical compliance in AI-driven healthcare diagnostics.</p>
    <br/>
    <p>Dr. Petrovic is also a strong advocate for interdisciplinary AI research, collaborating with legal scholars, policymakers, and sociologists to define ethical guidelines for AI deployment. Her work has influenced regulatory policies on AI governance in Europe, helping shape the ethical AI landscape.</p>
    <br/>
    <p>Beyond her theoretical research, she has been involved in the practical implementation of AI for medical imaging, natural language processing, and cybersecurity. Her expertise in symbolic AI allows her to bridge the gap between rule-based reasoning and modern deep learning approaches.</p>`,
  },

  '11': {
    user_id: 11,
    username: 'DrMateoSilva',
    first_name: 'Mateo',
    last_name: 'Silva',
    email: 'mateosilva@houston.edu',
    avatar: '/public/assets/users/11.jpg',
    role: 'mentor',
    city: 'Houston',
    state: 'Texas',
    university: 'Rice University',
    title: 'Econometrics Specialist',
    areas_of_focus: [
      'Econometrics',
      'Time Series Analysis',
      'Financial Modeling',
    ],
    badge: 320,
    about: `<p>Dr. Mateo Silva is a leading econometrics specialist at Rice University, focusing on time series analysis and financial modeling. His research aims to develop statistical methods that help economists and financial analysts make more accurate predictions about market trends and economic fluctuations.</p>
    <br/>
    <p>With a background in applied mathematics and economics, Dr. Silva has dedicated his career to understanding the complexities of financial systems. He has pioneered new econometric techniques that improve forecasting accuracy, particularly in macroeconomic and financial market analysis.</p>
    <br/>
    <p>His work has had a significant impact on the study of economic cycles, where he has developed predictive models that allow policymakers to anticipate recessions and inflationary trends. His research is widely used in economic policy formulation and risk assessment.</p>
    <br/>
    <p>Dr. Silva is particularly known for his contributions to time series forecasting, where he integrates traditional econometric methods such as ARIMA and GARCH with modern machine learning approaches. His hybrid models have been successfully applied in predicting stock market volatility and interest rate movements.</p>
    <br/>
    <p>Beyond academia, he consults for financial institutions, advising on quantitative trading strategies and risk management. His expertise in financial modeling has helped firms develop more resilient investment strategies that adapt to shifting economic conditions.</p>`,
  },
}

const posts = {
  '1': {
    post_id: 1,
    user_id: 11,
    username: 'DrMateoSilva',
    first_name: 'Mateo',
    last_name: 'Silva',
    avatar: '/public/assets/users/11.jpg',
    role: 'mentor',
    content: `<p>Comparing econometric methods for time series forecasting</p> 
      <br/>
      <p>I'm trying to compare various econometric models for forecasting long-term financial trends.</p>`,
    timestamp: '2025-01-28T09:15:00Z',
  },
  '2': {
    post_id: 2,
    user_id: 10,
    username: 'DrElenaPetrovic',
    first_name: 'Elena',
    last_name: 'Petrovic',
    avatar: '/public/assets/users/10.jpg',
    role: 'mentor',
    content:
      "<p>Are neural-symbolic hybrid models the future of AI?</p><br/> <p>I've been exploring neural-symbolic AI, which combines deep learning with logical reasoning.</p>",
    timestamp: '2025-01-29T13:40:00Z',
  },
  '3': {
    post_id: 3,
    user_id: 9,
    username: 'ProfRahulDeshmukh',
    first_name: 'Rahul',
    last_name: 'Deshmukh',
    avatar: '/public/assets/users/9.jpg',
    role: 'mentor',
    content:
      '<p>Looking for a dataset on global biodiversity loss</p><br/> <p>I’m currently working on a large-scale meta-analysis of biodiversity trends over the past 50 years.</p>',
    timestamp: '2025-01-30T08:50:00Z',
  },
  '4': {
    post_id: 4,
    user_id: 8,
    username: 'DrTatianaOrlova',
    first_name: 'Tatiana',
    last_name: 'Orlova',
    avatar: '/public/assets/users/8.jpg',
    role: 'mentor',
    content:
      '<p>Challenges in translating research into policy</p> <br/><p>How do you ensure your research influences policymakers effectively?</p>',
    timestamp: '2025-02-01T16:30:00Z',
  },
  '5': {
    post_id: 5,
    user_id: 7,
    username: 'ProfYusufAbdelaziz',
    first_name: 'Yusuf',
    last_name: 'Abdelaziz',
    avatar: '/public/assets/users/7.jpg',
    role: 'mentor',
    content:
      '<p>Tips for securing a postdoc in computational neuroscience?</p> <br/><p>Any advice on strong programs, funding opportunities, or application tips?</p>',
    timestamp: '2025-02-02T10:55:00Z',
  },
  '6': {
    post_id: 6,
    user_id: 6,
    username: 'DrAnayaMendoza',
    first_name: 'Anaya',
    last_name: 'Mendoza',
    avatar: '/public/assets/users/6.jpg',
    role: 'mentor',
    content:
      "<p>Best reference books for understanding nonlinear dynamics?</p> <br/><p>I'm preparing a lecture series and need some high-quality resources.</p>",
    timestamp: '2025-02-03T14:10:00Z',
  },
  '7': {
    post_id: 7,
    user_id: 5,
    username: 'DrKojiTanaka',
    first_name: 'Koji',
    last_name: 'Tanaka',
    avatar: '/public/assets/users/5.jpg',
    role: 'mentor',
    content:
      '<p>Need help with Bayesian statistics in social sciences</p><br/> <p>Any experts in Bayesian modeling willing to provide guidance?</p>',
    timestamp: '2025-02-04T17:20:00Z',
  },
  '8': {
    post_id: 8,
    user_id: 4,
    username: 'DrNaimaRahmani',
    first_name: 'Naima',
    last_name: 'Rahmani',
    avatar: '/public/assets/users/4.jpg',
    role: 'mentor',
    content:
      "<p>Breakthrough in Quantum Computing!</p> <br/><p>My team has recently published a paper on error correction in quantum circuits. This could significantly improve the stability of quantum processors in real-world applications.</p><br/> <p>Check out our findings here: <br/><a href='#'>Quantum Error Correction Research</a>. Would love to hear feedback from fellow quantum researchers!</p>",
    timestamp: '2025-02-05T15:45:00Z',
  },
  '9': {
    post_id: 9,
    user_id: 3,
    username: 'ProfLorenzoFerraro',
    first_name: 'Lorenzo',
    last_name: 'Ferraro',
    avatar: '/public/assets/users/3.jpg',
    role: 'mentor',
    content:
      "<p>What are the best practices for structuring a research proposal?</p><br/> <p>I am mentoring graduate students who are drafting their first <em>research proposals</em>. What are some key elements that should be included? What resources do you recommend?</p> <br/><p>For reference, I often suggest reading <a href='#'>this guide on proposal writing</a>, but I would love to hear insights from the community.</p>",
    timestamp: '2025-02-06T10:30:00Z',
  },
  '10': {
    post_id: 10,
    user_id: 2,
    username: 'DrMiriamKovács',
    first_name: 'Miriam',
    last_name: 'Kovács',
    avatar: '/public/assets/users/2.jpg',
    role: 'mentor',
    content:
      "<p>Exciting opportunity for collaboration!</p><br/> <p>I am currently conducting research on the application of machine learning in early cancer detection. Specifically, I am working with <em>convolutional neural networks (CNNs)</em> to analyze histopathological images for early signs of malignancy.</p><br/> <p>I would love to connect with researchers who have experience with biomedical imaging, deep learning, or clinical applications. If you’re working on something similar, let’s discuss potential collaborations!</p> <br/><p>Reference Papers: <a href='#'>Deep Learning in Cancer Imaging</a></p>",
    timestamp: '2025-02-07T12:00:00Z',
  },
}

const mock_db = {
  auth_user: users['1'],
  users,
  posts,
  replies,
  totalReplies: 10,
}

export default mock_db
