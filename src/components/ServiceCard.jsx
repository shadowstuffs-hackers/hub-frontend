import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';

const ServiceCard = ({ title, description, icon, onClick }) => {
  return (
    <Card className="service-card">
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <CardContent sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px' }}>
          <Box className="service-icon">
            {icon}
          </Box>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
