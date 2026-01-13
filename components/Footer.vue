<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Bengkel Bubut Damai</h3>
          <p>Layanan bubut logam profesional untuk kebutuhan industri dan custom part Anda.</p>
        </div>
        <div class="footer-section">
          <h4>Layanan</h4>
          <ul>
            <li>Bubut Besi</li>
            <li>Bubut Stainless</li>
            <li>Bubut Custom Part</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Kontak</h4>
          <p>Hubungi kami melalui WhatsApp untuk konsultasi dan penawaran.</p>
          <WhatsAppButton />
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Bengkel Bubut Damai. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(192, 192, 192, 0.1);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(192, 192, 192, 0.3), transparent);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #c0c0c0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.footer-section p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  color: #ccc;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 1rem;
  text-align: center;
  color: #999;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>

