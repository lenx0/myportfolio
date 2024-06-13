const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = 180; // Ajuste o offset conforme necessário
      const y = section.getBoundingClientRect().down + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  export default scrollToSection