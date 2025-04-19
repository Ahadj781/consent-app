async function generatePDF() {
  const person1 = document.getElementById('person1').value.trim();
  const person2 = document.getElementById('person2').value.trim();
  const consent = document.getElementById('consent').checked;

  if (!person1  !person2  !consent) {
    alert("Merci de remplir tous les champs et cocher la case de consentement.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text("Consentement mutuel", 20, 20);
  doc.text(`Personne 1 : ${person1}`, 20, 40);
  doc.text(`Personne 2 : ${person2}`, 20, 50);
  doc.text(`Date : ${new Date().toLocaleDateString()}`, 20, 60);
  doc.text("Les deux parties confirment leur consentement mutuel.", 20, 80);

  doc.save(`consentement-${person1}-${person2}.pdf`);
}
