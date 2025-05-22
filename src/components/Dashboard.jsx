import { Container, Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CompareIcon from '@mui/icons-material/Compare';
import DataArrayIcon from '@mui/icons-material/DataArray';
import TranslateIcon from '@mui/icons-material/Translate';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';

const tabs = ['Text', 'Code', 'Image & Video', 'Chatbot', 'Legal Domain'];

const services = [
  {
    title: 'Text Generation',
    description: 'Generate comprehensive text on any topic',
    icon: <TextFieldsIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'Ask to PDF',
    description: 'Ask questions to pdf to get answers',
    icon: <PictureAsPdfIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'Document Comparison',
    description: 'Analyze differences between documents',
    icon: <CompareIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'Synthetic Data Generation',
    description: 'Generate synthetic data using prompts',
    icon: <DataArrayIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'Document Translation',
    description: 'Translate your document to multiple languages',
    icon: <TranslateIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'URL Summary',
    description: 'Get a summary or ask questions to a URL',
    icon: <LinkIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'Cognitive Document Processing',
    description: 'Extracts text and tables from the file',
    icon: <DescriptionIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
  {
    title: 'Ask to Files',
    description: 'Ask questions to multiple files selected',
    icon: <FolderIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Text');

  const handleServiceClick = (service) => {
    console.log(`Clicked ${service.title}`);
    // Handle service click
  };

  return (
    <>
      <Box className="nav-tabs">
        {tabs.map((tab) => (
          <Box
            key={tab}
            className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Box>
        ))}
      </Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          AI Services Hub
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => handleServiceClick(service)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;