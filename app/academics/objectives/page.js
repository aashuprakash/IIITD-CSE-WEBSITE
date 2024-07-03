export default function page() {
  const Sections = [
    {
      title: 'Program Educational Objectives (PEOs) [BTech]',
      items: [
        {
          content:
            'To undertake industry careers involving innovation and problem solving using software and other information technologies.',
        },
        {
          content:
            'To undertake advanced studies for research careers in different areas of computer sciences and allied areas.',
        },
        {
          content:
            'To undertake entrepreneurship as a career by creating products and services using technology to provide value to some sections of the society.',
        },
      ],
    },
    {
      title: 'Program Outcomes (POs) [BTech]',
      items: [
        {
          content:
            'Engineering knowledge: To undertake industry careers involving innovation and problem solving using software and other information technologies.',
        },
        {
          content:
            'Problem analysis: Identify, formulate, review research literature, and analyze complex engineering pDesign/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.',
        },
        {
          content:
            'Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
        },
        {
          content:
            'Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
        },
        {
          content:
            'The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.',
        },
        {
          content:
            'Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
        },
        {
          content:
            'Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
        },
        {
          content:
            'Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
        },
        {
          content:
            'Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
        },
        {
          content:
            'Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
        },
        {
          content:
            'Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
      ],
    },

    {
      title: 'Program Specific Outcomes (PSOs) [BTech (CSE)]',
      heading:
        'The outcomes specific to the BTech (CSE) program are given here. At the end of the program, a student should have:',
      items: [
        {
          content:
            'Understanding of theoretical foundations and limits of computing.',
        },
        {
          content:
            'Understanding of computing at different levels of abstraction including circuits and computer architecture, operating systems, algorithms, and applications.',
        },
        {
          content:
            'Ability to adapt established models, techniques, algorithms, data structures, etc. for efficiently solving new problems.',
        },
        {
          content:
            'Ability to design, implement, and evaluate computer based system or application to meet the desired needs using modern tools and methodologies.',
        },
        {
          content:
            'Understanding and ability to use advanced techniques and tools in different areas of computing.',
        },
      ],
    },

    {
      title: 'Program Specific Outcomes (PSOs) [BTech (CSAI)]',
      heading:
        'The outcomes specific to the BTech (CSAI) program are given here. At the end of this program, a student should have:',
      items: [
        {
          content:
            'Understanding of foundational topics in Computer Science, Artificial Intelligence, and Machine Learning.',
        },
        {
          content:
            'Understanding of theoretical foundations and limits of Artificial Intelligence and Machine Learning.',
        },
        {
          content:
            'Ability to design and implement algorithms and data structures for efficiently solving new problems.',
        },
        {
          content:
            'Ability to model and analyze a variety of problems using appropriate mathematical/computational and AI concepts.',
        },
        {
          content:
            'Ability of apply and develop AI algorithms to transform large amount of data into intelligent decisions and/or behavior.',
        },
        {
          content:
            'An understanding of the impact of AI based solutions in an economic, societal, and environment context.',
        },
      ],
    },
    {
      title: 'Program Specific Outcomes (PSOs) [BTech (CSAI)]',
      items: [
        {
          content:
            'To undertake industry careers involving innovation and problem solving using software and other information technologies.',
        },
        {
          content:
            'To undertake research careers in Computer Sciences and allied areas.',
        },
        {
          content:
            'Ability to design and implement algorithms and data structures for efficiently solving new problems.',
        },
        {
          content:
            'To contribute to society by becoming a model professional who can communicate effectively and observes ethical behavior.',
        },
      ],
    },

    {
      title: 'Program Outcomes (POs) [MTech (CSE)]',
      heading:
        'The main outcomes of the MTech (CSE) program are given here. At the end of the program, a student should have:',
      items: [
        {
          content:
            'An understanding of the theoretical foundations and the limits of computing.',
        },
        {
          content:
            'An ability to adapt existing models, techniques, algorithms, data structures, etc. for efficiently solving problems.',
        },
        {
          content:
            'An ability to design, develop and evaluate new computer based systems for novel applications which meet the desired needs of industry and society.',
        },
        {
          content:
            'Understanding and ability to use advanced computing techniques and tools.',
        },
        {
          content:
            'An ability to undertake original research at the cutting edge of computer science & its related areas.',
        },
        {
          content:
            'An ability to function effectively individually or as a part of a team to accomplish a state goal.',
        },
        {
          content:
            'An understanding of professional and ethical responsibility.',
        },
        {
          content:
            'An ability to communicate effectively with a wide range of audience.',
        },
        {
          content:
            'An ability to learn independently and engage in lifelong learning.',
        },
        {
          content:
            'An understanding of the impact of IT related solutions in an economic, societal, and environment context.',
        },
      ],
    },
  ];

  const renderBoldText = (text) => {
    const boldTextRegex = /^(.*?:)/;
    const match = text.match(boldTextRegex);
    if (match) {
      return (
        <>
          <span className="font-semibold">{match[0]}</span>
          {text.substring(match[0].length)}
        </>
      );
    }
    return text;
  };

  const renderSection = (section) => (
    <section>
      <h1 className="heading-2 text-primary-main mb-4">{section.title}</h1>
      <p className="body-small mb-2">{section.heading}</p>
      {section.items.map((item) => (
        <div
          key={item.content}
          className={`points ${item.type === 'indent' ? 'points-indent' : ''}`}>
          <div className="flex items-start gap-3 md:gap-6">
            <div className="bullet-point mt-1.5 md:mt-3" />
            <p>{renderBoldText(item.content)}</p>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <main className="width-layout-1 padding-layout-1 flex flex-col gap-10">
      {Sections.map((section) => renderSection(section))}
    </main>
  );
}
