
function MainContent() {
  return(
    <div className="MainContent">
      <div class="main-content">
    <div class="header">
      <h2>Exames</h2>
    </div>

    <div class="exams-section">
      <div class="section-header">
        <h3>Exames</h3>
        <button class="add-button">Adicionar Exame</button>
      </div>

      <div class="exams-grid">
        <div class="exam-card">
          <div class="exam-icon">?</div>
          <div class="exam-info">
            <strong>Hemograma</strong>
            <p>Resultado</p>
            <p>12/05/2025</p>
          </div>
          <button class="view-button">Ver</button>
        </div>

        <div class="exam-card">
          <div class="exam-icon">?</div>
          <div class="exam-info">
            <strong>Raio-X</strong>
            <p>Imagem</p>
            <p>01/03/2025</p>
          </div>
          <button class="view-button">Ver</button>
        </div>

        <div class="exam-card">
          <div class="exam-icon">?</div>
          <div class="exam-info">
            <strong>Ultrassom</strong>
            <p>Resultado</p>
            <p>30/04/2025</p>
          </div>
          <button class="view-button">Ver</button>
        </div>

        <div class="exam-card">
          <div class="exam-icon">?</div>
          <div class="exam-info">
            <strong>ECG</strong>
            <p>12/01/2025</p>
          </div>
          <button class="view-button">Ver</button>
        </div>

        <div class="exam-card">
          <div class="exam-icon">?</div>
          <div class="exam-info">
            <strong>Colesterol</strong>
            <p>05/02/2025</p>
          </div>
          <button class="view-button">Ver</button>
        </div>

        <div class="exam-card">
          <div class="exam-icon">?</div>
          <div class="exam-info">
            <strong>Alergias</strong>
            <p>Exame</p>
            <p>12/12/2024</p>
          </div>
          <button class="view-button">Ver</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default MainContent;