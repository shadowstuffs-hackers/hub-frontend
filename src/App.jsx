import { Box } from '@mui/material';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Dashboard />
    </Box>
  );
}

export default App;
