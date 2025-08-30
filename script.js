 const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const subsectionMap = {
      "mv": "about",
      "goals": "about",
      "members": "about"
    };

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        let targetId = link.getAttribute("href").substring(1);

        if (subsectionMap[current]) {
          if (targetId === subsectionMap[current]) {
            link.classList.add("active");
          }
        } else {
          if (targetId === current) {
            link.classList.add("active");
          }
        }
      });
    });