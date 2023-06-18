import React, { useState } from 'react';
const CppCourseModules = () => {
  const modules = [
    { name: 'C++ Programming', hours: 72, topics: ['Getting Started', 'Operators & Expressions', 'Conditional and Looping Statements', 'Functions in C++', 'Memory Management and Pointers', 'OOP Concepts using C++', 'Constructor and Destructor', 'Inheritance', 'Polymorphism, Virtual Functions & Abstract Class', 'Exception Handling', 'Managing Console I/O Operations', 'File Handling in C++ & Templates', 'STL and RTTI'] },
    { name: 'Concepts of Operating System & Software Development Methodologies', hours: 72, topics: [] },
    { name: 'Object Oriented Programming with Java', hours: 112, topics: [] },
    { name: 'Algorithms and Data Structures (Using Java)', hours: 72, topics: [] },
    { name: 'Database Technologies', hours: 72, topics: [] },
    { name: 'Web Programming Technologies', hours: 112, topics: [] },
    { name: 'Web-based Java Programming', hours: 104, topics: [] },
    { name: 'Microsoft .Net Technologies', hours: 84, topics: [] },
    { name: 'General Aptitude & Effective Communication', hours: 80, topics: [] },
    { name: 'Project', hours: 120, topics: [] }
  ];

  const [selectedTopics, setSelectedTopics] = useState({});

  const handleTopicChange = (moduleName, topicName) => {
    setSelectedTopics(prevSelectedTopics => ({
      ...prevSelectedTopics,
      [moduleName]: topicName
    }));
  };

  const renderDropdowns = () => {
    return modules.map((module, index) => (
      <div key={index}>
        <h3>{module.name}</h3>
        <label htmlFor={`topics-${index}`}>Select a topic:</label>
        <select
          id={`topics-${index}`}
          value={selectedTopics[module.name] || ''}
          onChange={event => handleTopicChange(module.name, event.target.value)}
        >
          <option value="">Select</option>
          {module.topics.map((topic, topicIndex) => (
            <option key={topicIndex} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {selectedTopics[module.name] && (
          <p>Total hours for {selectedTopics[module.name]}: {module.hours} Hours</p>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h1>Course Modules</h1>
      {renderDropdowns()}
    </div>
  );
};


export default CppCourseModules;
