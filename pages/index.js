export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #111827, #1F2937)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1>🚀 Navi is Coming Soon</h1>
      <p style={{ maxWidth: 600 }}>
        Navi is the voice-first AI assistant built by the Morph team.
        Soon, it will power real-time support, personal tasking, and more — all from one smart interface.
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#10B981',
        borderRadius: '9999px',
        fontWeight: 'bold',
        color: '#111827'
      }}>
        Part of the MorphHQ.ai Suite
      </div>
    </div>
  );
}