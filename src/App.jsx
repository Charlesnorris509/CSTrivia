import { useState, useEffect } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  // Set document title when component mounts
  useEffect(() => {
    document.title = "CS Trivia Flashcards";
  }, []);

  const flashcards = [
    {
      id: 1,
      question: "What is Big O notation used for?",
      answer: "To describe the performance or complexity of an algorithm",
      difficulty: "Easy",
      subject: "Algorithm Analysis"
    },
    {
      id: 2,
      question: "What is a Binary Search Tree (BST)?",
      answer: "A tree data structure where each node has at most two children, with all left descendants <= current node, and all right descendants > current node",
      difficulty: "Medium",
      subject: "Data Structures"
    },
    {
      id: 3,
      question: "What is the difference between BFS and DFS?",
      answer: "BFS explores all nodes at present depth before moving to nodes at next depth level. DFS explores as far as possible along each branch before backtracking.",
      difficulty: "Hard",
      subject: "Graph Algorithms"
    },
    {
      id: 4,
      question: "What is a Stack data structure?",
      answer: "A linear data structure that follows the Last-In-First-Out (LIFO) principle",
      difficulty: "Easy",
      subject: "Data Structures"
    },
    {
      id: 5,
      question: "What is a deadlock in operating systems?",
      answer: "A situation where two or more processes are unable to proceed because each is waiting for resources held by another process",
      difficulty: "Hard",
      subject: "Operating Systems"
    },
    {
      id: 6,
      question: "What is recursion in programming?",
      answer: "A process where a function calls itself directly or indirectly to solve a problem",
      difficulty: "Medium",
      subject: "Programming Concepts"
    },
    {
      id: 7,
      question: "What is a hash table?",
      answer: "A data structure that implements an associative array abstract data type, a structure that can map keys to values",
      difficulty: "Medium",
      subject: "Data Structures"
    },
    {
      id: 8,
      question: "What is the time complexity of quicksort in the average case?",
      answer: "O(n log n)",
      difficulty: "Medium",
      subject: "Algorithm Analysis"
    },
    {
      id: 9,
      question: "What is a memory leak?",
      answer: "A type of resource leak that occurs when a program incorrectly manages memory allocations",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 10,
      question: "What is the difference between process and thread?",
      answer: "A process is an independent program with its own memory space, while a thread is a subset of a process sharing the same memory space",
      difficulty: "Hard",
      subject: "Operating Systems"
    },
    {
      id: 11,
      question: "What is SQL injection?",
      answer: "A code injection technique used to attack data-driven applications by inserting malicious SQL statements",
      difficulty: "Medium",
      subject: "Security"
    },
    {
      id: 12,
      question: "What is a REST API?",
      answer: "Representational State Transfer - an architectural style for distributed systems using HTTP methods",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 13,
      question: "What is the CAP theorem?",
      answer: "States that distributed systems can only guarantee two out of three: Consistency, Availability, and Partition tolerance",
      difficulty: "Hard",
      subject: "System Design"
    },
    {
      id: 14,
      question: "What is a mutex?",
      answer: "A synchronization primitive that prevents multiple threads from simultaneously accessing a shared resource",
      difficulty: "Medium",
      subject: "Concurrency"
    },
    {
      id: 15,
      question: "What is dynamic programming?",
      answer: "An algorithmic paradigm that solves complex problems by breaking them into simpler subproblems",
      difficulty: "Hard",
      subject: "Algorithm Design"
    },
    {
      id: 16,
      question: "What is the difference between HTTP and HTTPS?",
      answer: "HTTPS is HTTP with encryption (SSL/TLS). It provides secure communication between client and server",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 17,
      question: "What is a B-tree?",
      answer: "A self-balancing tree data structure that maintains sorted data and allows searches, insertions, and deletions in logarithmic time",
      difficulty: "Hard",
      subject: "Data Structures"
    },
    {
      id: 18,
      question: "What is the difference between TCP and UDP?",
      answer: "TCP is connection-oriented and reliable, while UDP is connectionless and doesn't guarantee delivery",
      difficulty: "Medium",
      subject: "Networking"
    },
    {
      id: 19,
      question: "What is a race condition?",
      answer: "A situation where multiple threads access shared data and the final result depends on the timing of their execution",
      difficulty: "Hard",
      subject: "Concurrency"
    },
    {
      id: 20,
      question: "What is containerization?",
      answer: "A lightweight alternative to virtual machines that packages application code with dependencies",
      difficulty: "Medium",
      subject: "DevOps"
    },
    {
      id: 21,
      question: "What is a primary key in a database?",
      answer: "A unique identifier for each record in a database table",
      difficulty: "Easy",
      subject: "Databases"
    },
    {
      id: 22,
      question: "What is the difference between GET and POST methods?",
      answer: "GET requests data and sends parameters in URL, POST submits data and sends parameters in request body",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 23,
      question: "What is a memory cache?",
      answer: "A high-speed data storage layer that stores a subset of data for faster future access",
      difficulty: "Medium",
      subject: "System Design"
    },
    {
      id: 24,
      question: "What is CORS?",
      answer: "Cross-Origin Resource Sharing - a mechanism that allows restricted resources to be requested from another domain",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 25,
      question: "What is a load balancer?",
      answer: "A device that distributes network traffic across multiple servers to ensure optimal resource utilization",
      difficulty: "Medium",
      subject: "System Design"
    },
    {
      id: 26,
      question: "What is the difference between SQL and NoSQL databases?",
      answer: "SQL databases are relational and use structured query language, NoSQL databases are non-relational and more flexible",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 27,
      question: "What is a webhook?",
      answer: "A way for an app to provide real-time information to other applications through HTTP callbacks",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 28,
      question: "What is the time complexity of binary search?",
      answer: "O(log n)",
      difficulty: "Easy",
      subject: "Algorithm Analysis"
    },
    {
      id: 29,
      question: "What is a blockchain?",
      answer: "A distributed ledger technology that maintains a growing list of records secured using cryptography",
      difficulty: "Hard",
      subject: "Distributed Systems"
    },
    {
      id: 30,
      question: "What is the difference between compilation and interpretation?",
      answer: "Compilation converts entire code to machine language before execution, interpretation executes code line by line",
      difficulty: "Medium",
      subject: "Programming Languages"
    },
    {
      id: 31,
      question: "What is a deadlock?",
      answer: "A situation where two or more processes are unable to proceed because each is waiting for resources held by another",
      difficulty: "Hard",
      subject: "Operating Systems"
    },
    {
      id: 32,
      question: "What is a hash function?",
      answer: "A function that converts input data of arbitrary size into fixed-size output",
      difficulty: "Medium",
      subject: "Data Structures"
    },
    {
      id: 33,
      question: "What is JWT?",
      answer: "JSON Web Token - a compact, URL-safe means of representing claims between parties",
      difficulty: "Medium",
      subject: "Security"
    },
    {
      id: 34,
      question: "What is the difference between Stack and Queue?",
      answer: "Stack follows LIFO (Last In First Out), Queue follows FIFO (First In First Out)",
      difficulty: "Easy",
      subject: "Data Structures"
    },
    {
      id: 35,
      question: "What is a microservice architecture?",
      answer: "An architectural style that structures an application as a collection of small autonomous services",
      difficulty: "Hard",
      subject: "System Design"
    },
    {
      id: 36,
      question: "What is normalization in databases?",
      answer: "The process of organizing data to reduce redundancy and improve data integrity",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 37,
      question: "What is a memory heap?",
      answer: "A region of memory where dynamically allocated memory is managed",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 38,
      question: "What is the difference between IPv4 and IPv6?",
      answer: "IPv6 uses 128-bit addresses and offers more addresses than IPv4's 32-bit addressing",
      difficulty: "Medium",
      subject: "Networking"
    },
    {
      id: 39,
      question: "What is a design pattern?",
      answer: "A reusable solution to a commonly occurring problem in software design",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 40,
      question: "What is the difference between synchronous and asynchronous programming?",
      answer: "Synchronous code executes sequentially, while asynchronous code can execute in parallel",
      difficulty: "Medium",
      subject: "Programming Concepts"
    },
    {
      id: 41,
      question: "What is a memory stack?",
      answer: "A region of memory that stores temporary variables created by functions",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 42,
      question: "What is ACID in databases?",
      answer: "Atomicity, Consistency, Isolation, Durability - properties that guarantee reliable database transactions",
      difficulty: "Hard",
      subject: "Databases"
    },
    {
      id: 43,
      question: "What is the Observer pattern?",
      answer: "A design pattern where objects (observers) automatically notify when a state change occurs",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 44,
      question: "What is a proxy server?",
      answer: "An intermediate server that acts as a gateway between a user and the internet",
      difficulty: "Easy",
      subject: "Networking"
    },
    {
      id: 45,
      question: "What is the difference between unit testing and integration testing?",
      answer: "Unit testing tests individual components, integration testing tests how components work together",
      difficulty: "Medium",
      subject: "Software Testing"
    },
    {
      id: 46,
      question: "What is a trigger in databases?",
      answer: "A special type of stored procedure that automatically executes when an event occurs in the database",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 47,
      question: "What is the difference between authentication and authorization?",
      answer: "Authentication verifies who you are, authorization determines what you're allowed to do",
      difficulty: "Easy",
      subject: "Security"
    },
    {
      id: 48,
      question: "What is a memory segment?",
      answer: "A portion of memory allocated to store specific types of data and instructions",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 49,
      question: "What is the Singleton pattern?",
      answer: "A design pattern that restricts the instantiation of a class to one single instance",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 50,
      question: "What is dependency injection?",
      answer: "A design pattern where objects receive other objects that they depend on, rather than creating them internally",
      difficulty: "Hard",
      subject: "Software Design"
    },
    {
      id: 51,
      question: "What is the time complexity of insertion sort?",
      answer: "O(n²) in worst and average cases, O(n) in best case",
      difficulty: "Medium",
      subject: "Algorithm Analysis"
    },
    {
      id: 52,
      question: "What is a foreign key in databases?",
      answer: "A field that links two tables together by referencing the primary key of another table",
      difficulty: "Easy",
      subject: "Databases"
    },
    {
      id: 53,
      question: "What is the MVC pattern?",
      answer: "Model-View-Controller: a pattern that separates application logic into three interconnected components",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 54,
      question: "What is polymorphism in OOP?",
      answer: "The ability of objects to take multiple forms and handle different data types through a single interface",
      difficulty: "Medium",
      subject: "Programming Concepts"
    },
    {
      id: 55,
      question: "What is a memory leak?",
      answer: "A failure in a program to release discarded memory, causing gradual performance degradation",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 56,
      question: "What is a closure in programming?",
      answer: "A function that has access to variables in its outer lexical scope, even after the outer function has returned",
      difficulty: "Medium",
      subject: "Programming Concepts"
    },
    {
      id: 57,
      question: "What is the time complexity of merge sort?",
      answer: "O(n log n) in all cases",
      difficulty: "Medium",
      subject: "Algorithm Analysis"
    },
    {
      id: 58,
      question: "What is a critical section?",
      answer: "A part of code that accesses shared resources and must not be executed by more than one process at a time",
      difficulty: "Medium",
      subject: "Operating Systems"
    },
    {
      id: 59,
      question: "What is the purpose of an index in a database?",
      answer: "To optimize the speed of data retrieval operations on database tables",
      difficulty: "Easy",
      subject: "Databases"
    },
    {
      id: 60,
      question: "What is the Factory pattern?",
      answer: "A creational pattern that provides an interface for creating objects without specifying their concrete classes",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 61,
      question: "What is a CDN?",
      answer: "Content Delivery Network - a network of servers that delivers cached content to users based on their geographic location",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 62,
      question: "What is the difference between call stack and heap?",
      answer: "Call stack stores function call information and local variables, heap stores dynamically allocated objects",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 63,
      question: "What is a DNS?",
      answer: "Domain Name System - translates domain names to IP addresses",
      difficulty: "Easy",
      subject: "Networking"
    },
    {
      id: 64,
      question: "What is Docker?",
      answer: "A platform for developing, shipping, and running applications in containers",
      difficulty: "Medium",
      subject: "DevOps"
    },
    {
      id: 65,
      question: "What is the purpose of virtual memory?",
      answer: "To provide an illusion of larger main memory and to handle memory fragmentation",
      difficulty: "Hard",
      subject: "Operating Systems"
    },
    {
      id: 66,
      question: "What is a RED-BLACK tree?",
      answer: "A self-balancing binary search tree with color properties that ensure the tree remains balanced",
      difficulty: "Hard",
      subject: "Data Structures"
    },
    {
      id: 67,
      question: "What is the CAP theorem?",
      answer: "States that a distributed system can only provide two out of three: Consistency, Availability, and Partition tolerance",
      difficulty: "Hard",
      subject: "Distributed Systems"
    },
    {
      id: 68,
      question: "What is a message queue?",
      answer: "A communication mechanism that allows asynchronous communication between components through message passing",
      difficulty: "Medium",
      subject: "System Design"
    },
    {
      id: 69,
      question: "What is the difference between process and thread scheduling?",
      answer: "Process scheduling deals with CPU allocation to processes, thread scheduling deals with CPU allocation within a process",
      difficulty: "Hard",
      subject: "Operating Systems"
    },
    {
      id: 70,
      question: "What is the time complexity of heap sort?",
      answer: "O(n log n) in all cases",
      difficulty: "Medium",
      subject: "Algorithm Analysis"
    },
    {
      id: 71,
      question: "What is the purpose of a view in databases?",
      answer: "A virtual table based on the result set of an SQL statement, providing a way to simplify complex queries",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 72,
      question: "What is dependency inversion principle?",
      answer: "High-level modules should not depend on low-level modules; both should depend on abstractions",
      difficulty: "Hard",
      subject: "Software Design"
    },
    {
      id: 73,
      question: "What is the difference between cookie and session storage?",
      answer: "Cookies are stored on the client and sent with HTTP requests, session storage is temporary and cleared when browser closes",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 74,
      question: "What is a memory barrier?",
      answer: "A type of instruction that ensures memory operations are completed in a specific order",
      difficulty: "Hard",
      subject: "Concurrency"
    },
    {
      id: 75,
      question: "What is the Builder pattern?",
      answer: "A design pattern that lets you construct complex objects step by step",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 76,
      question: "What is database sharding?",
      answer: "A type of database partitioning that separates large databases into smaller, faster, more easily managed parts",
      difficulty: "Hard",
      subject: "Databases"
    },
    {
      id: 77,
      question: "What is the difference between shallow and deep copy?",
      answer: "Shallow copy creates a new object but references same memory locations, deep copy creates new object with new memory locations",
      difficulty: "Medium",
      subject: "Programming Concepts"
    },
    {
      id: 78,
      question: "What is a load balancer?",
      answer: "A device that distributes incoming network traffic across multiple servers",
      difficulty: "Medium",
      subject: "System Design"
    },
    {
      id: 79,
      question: "What is the purpose of garbage collection?",
      answer: "To automatically free memory that is no longer being used by the program",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 80,
      question: "What is the difference between PUT and PATCH methods?",
      answer: "PUT updates entire resource, PATCH applies partial modifications",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 81,
      question: "What is a semaphore?",
      answer: "A synchronization primitive that controls access to a common resource by multiple processes",
      difficulty: "Medium",
      subject: "Operating Systems"
    },
    {
      id: 82,
      question: "What is the time complexity of bubble sort?",
      answer: "O(n²) in worst and average cases, O(n) in best case",
      difficulty: "Easy",
      subject: "Algorithm Analysis"
    },
    {
      id: 83,
      question: "What is the Strategy pattern?",
      answer: "A behavioral pattern that lets you define a family of algorithms and make them interchangeable",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 84,
      question: "What is normalization in databases?",
      answer: "The process of organizing data to reduce redundancy and improve data integrity",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 85,
      question: "What is a proxy pattern?",
      answer: "A structural pattern that provides a surrogate for another object to control access to it",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 86,
      question: "What is the difference between static and dynamic typing?",
      answer: "Static typing checks types at compile time, dynamic typing checks types at runtime",
      difficulty: "Medium",
      subject: "Programming Languages"
    },
    {
      id: 87,
      question: "What is eventual consistency?",
      answer: "A consistency model used in distributed systems where replicas may be temporarily inconsistent but will converge",
      difficulty: "Hard",
      subject: "Distributed Systems"
    },
    {
      id: 88,
      question: "What is the purpose of an ORM?",
      answer: "Object-Relational Mapping - maps database tables to programming objects",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 89,
      question: "What is the Observer pattern?",
      answer: "A behavioral pattern where objects automatically notify their observers when their state changes",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 90,
      question: "What is the difference between OAuth and JWT?",
      answer: "OAuth is an authorization protocol, JWT is a token format for transmitting information",
      difficulty: "Medium",
      subject: "Security"
    },
    {
      id: 91,
      question: "What is the Command pattern?",
      answer: "A behavioral pattern that encapsulates a request as an object",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 92,
      question: "What is cache coherence?",
      answer: "The uniformity of shared resource data that ends up stored in multiple local caches",
      difficulty: "Hard",
      subject: "Computer Architecture"
    },
    {
      id: 93,
      question: "What is the difference between mutex and semaphore?",
      answer: "Mutex is owned by a thread and must be released by same thread, semaphore can be released by any thread",
      difficulty: "Medium",
      subject: "Operating Systems"
    },
    {
      id: 94,
      question: "What is a transaction in databases?",
      answer: "A sequence of operations performed as a single logical unit of work",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 95,
      question: "What is the Adapter pattern?",
      answer: "A structural pattern that allows incompatible interfaces to work together",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 96,
      question: "What is the purpose of HTTP status codes?",
      answer: "To indicate the result of an HTTP request, such as success, redirect, or error",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 97,
      question: "What is a memory pool?",
      answer: "A chunk of pre-allocated memory used for dynamic memory allocation",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 98,
      question: "What is the difference between XML and JSON?",
      answer: "XML uses tags and is more verbose, JSON uses key-value pairs and is more lightweight",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 99,
      question: "What is the purpose of a firewall?",
      answer: "To monitor and control incoming and outgoing network traffic based on security rules",
      difficulty: "Easy",
      subject: "Security"
    },
    {
      id: 100,
      question: "What is the time complexity of depth-first search?",
      answer: "O(V + E) where V is vertices and E is edges",
      difficulty: "Medium",
      subject: "Algorithm Analysis"
    },
    {
      id: 101,
      question: "What is the purpose of Git branching?",
      answer: "To develop features isolated from each other and manage different versions of code",
      difficulty: "Easy",
      subject: "Version Control"
    },
    {
      id: 102,
      question: "What is the difference between abstract class and interface?",
      answer: "Abstract class can have implementation, interface only has method signatures",
      difficulty: "Medium",
      subject: "Programming Concepts"
    },
    {
      id: 103,
      question: "What is a memory fence?",
      answer: "A type of barrier instruction that ensures memory access ordering in concurrent programming",
      difficulty: "Hard",
      subject: "Concurrency"
    },
    {
      id: 104,
      question: "What is the purpose of Docker Compose?",
      answer: "To define and run multi-container Docker applications",
      difficulty: "Medium",
      subject: "DevOps"
    },
    {
      id: 105,
      question: "What is the difference between null and undefined?",
      answer: "Null is an assigned value representing no value, undefined means a variable hasn't been assigned a value",
      difficulty: "Easy",
      subject: "Programming Concepts"
    },
    {
      id: 106,
      question: "What is the purpose of an API Gateway?",
      answer: "To act as a single entry point for multiple microservices and handle cross-cutting concerns",
      difficulty: "Medium",
      subject: "System Design"
    },
    {
      id: 107,
      question: "What is the Chain of Responsibility pattern?",
      answer: "A behavioral pattern that passes requests along a chain of handlers",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 108,
      question: "What is the difference between CSR and SSR?",
      answer: "Client-Side Rendering happens in browser, Server-Side Rendering happens on server",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 109,
      question: "What is a memory segment fault?",
      answer: "An error that occurs when a program tries to access memory it doesn't have permission to access",
      difficulty: "Medium",
      subject: "Memory Management"
    },
    {
      id: 110,
      question: "What is the purpose of HTTP/2?",
      answer: "To improve web performance through features like multiplexing and server push",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 111,
      question: "What is the Mediator pattern?",
      answer: "A behavioral pattern that reduces coupling between components by making them communicate through a mediator",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 112,
      question: "What is the difference between char and varchar?",
      answer: "Char has fixed length and is padded with spaces, varchar has variable length",
      difficulty: "Easy",
      subject: "Databases"
    },
    {
      id: 113,
      question: "What is the purpose of a CDN?",
      answer: "To distribute content geographically to reduce latency and improve performance",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 114,
      question: "What is the State pattern?",
      answer: "A behavioral pattern that allows an object to alter its behavior when its internal state changes",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 115,
      question: "What is the difference between optimistic and pessimistic locking?",
      answer: "Optimistic assumes conflicts are rare, pessimistic prevents conflicts by locking resources",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 116,
      question: "What is the purpose of WebSockets?",
      answer: "To provide full-duplex communication channels over a single TCP connection",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 117,
      question: "What is the Decorator pattern?",
      answer: "A structural pattern that allows adding new behaviors to objects dynamically",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 118,
      question: "What is the difference between stack and queue?",
      answer: "Stack follows Last-In-First-Out, queue follows First-In-First-Out",
      difficulty: "Easy",
      subject: "Data Structures"
    },
    {
      id: 119,
      question: "What is the purpose of Kubernetes?",
      answer: "To automate deployment, scaling, and management of containerized applications",
      difficulty: "Hard",
      subject: "DevOps"
    },
    {
      id: 120,
      question: "What is the Composite pattern?",
      answer: "A structural pattern that lets you compose objects into tree structures",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 121,
      question: "What is the difference between REST and GraphQL?",
      answer: "REST uses multiple endpoints with fixed data structures, GraphQL uses a single endpoint with flexible queries",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 122,
      question: "What is the purpose of database indexing?",
      answer: "To improve the speed of data retrieval operations on database tables",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 123,
      question: "What is the Bridge pattern?",
      answer: "A structural pattern that separates an abstraction from its implementation",
      difficulty: "Hard",
      subject: "Software Design"
    },
    {
      id: 124,
      question: "What is the difference between process and thread?",
      answer: "Process is independent and has its own memory space, thread shares memory space with other threads in same process",
      difficulty: "Medium",
      subject: "Operating Systems"
    },
    {
      id: 125,
      question: "What is the purpose of Redux?",
      answer: "To manage application state in a predictable way using a single store",
      difficulty: "Medium",
      subject: "Web Development"
    },
    {
      id: 126,
      question: "What is the Flyweight pattern?",
      answer: "A structural pattern that minimizes memory usage by sharing common parts of state between multiple objects",
      difficulty: "Hard",
      subject: "Software Design"
    },
    {
      id: 127,
      question: "What is the difference between HTTP and HTTPS?",
      answer: "HTTPS encrypts data in transit using SSL/TLS, HTTP sends data in plain text",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 128,
      question: "What is the purpose of Docker volumes?",
      answer: "To persist data generated by and used by Docker containers",
      difficulty: "Medium",
      subject: "DevOps"
    },
    {
      id: 129,
      question: "What is the Template Method pattern?",
      answer: "A behavioral pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 130,
      question: "What is the difference between hash table and tree?",
      answer: "Hash table provides O(1) average access but no ordering, tree maintains order with O(log n) access",
      difficulty: "Medium",
      subject: "Data Structures"
    },
    {
      id: 131,
      question: "What is the purpose of CI/CD?",
      answer: "To automate the process of software delivery and infrastructure changes",
      difficulty: "Medium",
      subject: "DevOps"
    },
    {
      id: 132,
      question: "What is the Iterator pattern?",
      answer: "A behavioral pattern that provides a way to access elements of a collection sequentially",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 133,
      question: "What is the difference between cookies and localStorage?",
      answer: "Cookies are sent with HTTP requests and have expiration, localStorage stays in browser until explicitly cleared",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 134,
      question: "What is the purpose of database transactions?",
      answer: "To ensure data integrity by grouping operations that must succeed or fail as a unit",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 135,
      question: "What is the Facade pattern?",
      answer: "A structural pattern that provides a simplified interface to a complex subsystem",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 136,
      question: "What is the difference between TCP and UDP?",
      answer: "TCP ensures reliable, ordered delivery; UDP provides fast, unordered delivery without guarantees",
      difficulty: "Medium",
      subject: "Networking"
    },
    {
      id: 137,
      question: "What is the purpose of cache invalidation?",
      answer: "To ensure cached data is consistent with the source of truth",
      difficulty: "Medium",
      subject: "System Design"
    },
    {
      id: 138,
      question: "What is the Prototype pattern?",
      answer: "A creational pattern that lets you copy existing objects without making your code dependent on their classes",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 139,
      question: "What is the difference between GET and POST?",
      answer: "GET retrieves data and is idempotent, POST submits data and may modify server state",
      difficulty: "Easy",
      subject: "Web Development"
    },
    {
      id: 140,
      question: "What is the purpose of database replication?",
      answer: "To improve availability and read performance by maintaining copies of data across multiple servers",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 141,
      question: "What is the State pattern?",
      answer: "A behavioral pattern that lets an object alter its behavior when its internal state changes",
      difficulty: "Medium",
      subject: "Software Design"
    },
    {
      id: 142,
      question: "What is the difference between IPv4 and IPv6?",
      answer: "IPv4 uses 32-bit addresses, IPv6 uses 128-bit addresses and has improved security features",
      difficulty: "Medium",
      subject: "Networking"
    },
    {
      id: 143,
      question: "What is the purpose of load testing?",
      answer: "To verify system behavior under normal and peak load conditions",
      difficulty: "Medium",
      subject: "Software Testing"
    },
    {
      id: 144,
      question: "What is the Memento pattern?",
      answer: "A behavioral pattern that lets you save and restore the previous state of an object",
      difficulty: "Hard",
      subject: "Software Design"
    },
    {
      id: 145,
      question: "What is the difference between authentication and authorization?",
      answer: "Authentication verifies identity, authorization determines access rights",
      difficulty: "Easy",
      subject: "Security"
    },
    {
      id: 146,
      question: "What is the purpose of database normalization?",
      answer: "To reduce data redundancy and improve data integrity",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 147,
      question: "What is the Visitor pattern?",
      answer: "A behavioral pattern that lets you separate algorithms from the objects on which they operate",
      difficulty: "Hard",
      subject: "Software Design"
    },
    {
      id: 148,
      question: "What is the difference between SSL and TLS?",
      answer: "TLS is the successor to SSL, providing stronger security and improved functionality",
      difficulty: "Medium",
      subject: "Security"
    },
    {
      id: 149,
      question: "What is the purpose of database views?",
      answer: "To provide a virtual table representing the result of a database query",
      difficulty: "Medium",
      subject: "Databases"
    },
    {
      id: 150,
      question: "What is the Command pattern?",
      answer: "A behavioral pattern that turns a request into a stand-alone object containing all request information",
      difficulty: "Medium",
      subject: "Software Design"
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  // Update streaks when user answers correctly
  const handleCorrectAnswer = () => {
    const newStreak = currentStreak + 1;
    setCurrentStreak(newStreak);
    if (newStreak > longestStreak) {
      setLongestStreak(newStreak);
    }
  };

  // Reset streak on wrong answer
  const handleWrongAnswer = () => {
    setCurrentStreak(0);
  };

  // Handle mastering a card
  const handleMasterCard = (cardId) => {
    const masteredCard = flashcards.find(card => card.id === cardId);
    setMasteredCards([...masteredCards, masteredCard]);
  };

  // Get unique subjects from flashcards
  const subjects = ['All', ...new Set(flashcards.map(card => card.subject))].sort();
  
  // Filter flashcards based on selected subject
  const filteredFlashcards = selectedSubject === 'All' 
    ? flashcards 
    : flashcards.filter(card => card.subject === selectedSubject);
  // Filter out mastered cards from the available cards
  const availableCards = filteredFlashcards.filter(
    card => !masteredCards.some(mastered => mastered.id === card.id)
  );

  // Move to next card in sequence
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex >= availableCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to previous card in sequence
  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex <= 0 ? availableCards.length - 1 : prevIndex - 1
    );
  };

  // Get random card (for shuffle functionality)
  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    setCurrentCardIndex(randomIndex);
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setCurrentCardIndex(0);
  };

  return (
    <div className="app">
      <div className="main-title-container">
        <h1 className="main-title">CS Trivia Flashcards</h1>
      </div>
      <header className="app-header">
        <p className="description">
        Test your computer science knowledge with these interactive flashcards!</p>
        <div className="filter-container">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectChange(subject)}
              className={`filter-button ${selectedSubject === subject ? 'active' : ''}`}
            >
              {subject}
            </button>
          ))}
        </div>
        <a 
          href="https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/"
          target="_blank"
          rel="noopener noreferrer"
          className="resource-link"
        >
          Click here to learn more about DSA on GeeksForGeeks
        </a>
        <p className="card-count">
          Showing: {availableCards.length} {selectedSubject !== 'All' ? `${selectedSubject} ` : ''}Cards
          <span className="card-position"> (Card {currentCardIndex + 1} of {availableCards.length})</span>
        </p>
        <div className="streak-counter">
          <span>Current Streak: {currentStreak}</span>
          <span>Longest Streak: {longestStreak}</span>
        </div>
        <div className="mastered-count">
          Mastered Cards: {masteredCards.length}
        </div>
        <button className="shuffle-button" onClick={getRandomCard}>
          Shuffle Cards
        </button>
      </header>
      
      <main className="flashcard-container">
        <Flashcard 
          card={availableCards[currentCardIndex]} 
          onNext={handleNextCard}
          onPrevious={handlePreviousCard}
          onCorrectAnswer={handleCorrectAnswer}
          onWrongAnswer={handleWrongAnswer}
          onMasterCard={handleMasterCard}
        />
      </main>
    </div>
  )
}

export default App
