---
title: "Matrix Arithmetic with Threads"
description: "Speeding up matrix operations by giving each cell its own thread."
image:
    url: "/threadproj-thumbnail.png"
    alt: "Threaded matrix operations"
platform: "Desktop"
stack: "Java | Swing"
website: "https://github.com/mrohith29/Matrix-Operations-with-Threads"
github: "https://github.com/mrohith29/Matrix-Operations-with-Threads"
featured: false
year: "2024"
order: 4
tech: ["Java", "Threads", "Swing"]
---

Standard matrix arithmetic loops over every cell on a single thread — slow once the matrices get large. This project assigns each computation its own **thread**, so values compute in parallel and the total time drops. A concrete lesson in why multiprocessing beats monoprocessing for parallelizable work.
