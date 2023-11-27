<template>
    <div class="home-container">
      <nav class="navbar">
        <ul>
          <li><router-link to="/0-3-months/">Newborn (0–3 Months)</router-link></li>
          <li><router-link to="/4-8-months/">Infancy (4–8 Months)</router-link></li>
          <li><router-link to="/9-12-months/">Pre-Toddler (9–12 Months)</router-link></li>
        </ul>
      </nav>
      <main>
        <Content/> 
        <div class="features">
          <section>
            <h2>Sleep Patterns</h2>
            <p>Learn about your baby's sleep patterns and how to establish healthy sleep habits.</p>
          </section>
          <section>
            <h2>Feeding and Nutrition</h2>
            <p>Essential tips on breastfeeding, bottle feeding, and introducing solid foods.</p>
          </section>
          <section>
            <h2>Developmental Milestones</h2>
            <p>Track and support your baby's physical, social, and emotional milestones.</p>
          </section>
        </div>
      </main>
    </div>
  </template>
  <script>
  export default{ }
    </script>

<style scoped>
.home-container {
  max-width: 1000px; 
  margin: 0 auto; 
  padding: 20px;

}

.navbar {
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-bottom: 40px; 
}

.navbar ul {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 20px;
}

.navbar a {
  text-decoration: none;
  color: #007bff; 
  font-weight: bold; 
}

.features section {
  margin-bottom: 20px; 
}

h2 {
  margin-top: 0;
}
</style>

  
  