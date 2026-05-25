export default function Footer() {
  return (
    <footer style={{ background: '#112218', color: '#888', textAlign: 'center', padding: '3rem 5%' }}>
      <h3 className="serif" style={{ color: 'white', marginBottom: '1rem' }}>Dalakit House Villa Two</h3>
      <p>Lambojon, Siquijor, Philippines</p>
      <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
