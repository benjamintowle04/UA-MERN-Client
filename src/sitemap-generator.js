

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
  });
  
  const router = require('./sitemap-routes').default;
  const Sitemap = require('react-router-sitemap').default;

  // Define path parameters for dynamic routes
    const paramsConfig = {
        '/coach/:coachId': [
        { coachId: 'max-robinson' },
        { coachId: 'ben-towle' },
        { coachId: 'mekhi-holmes' },
        { coachId: 'blane-wallace' },
        { coachId: 'ellie-robinson' },
        { coachId: 'jesse-pladsen' },
        { coachId: 'anthony-potratz' },
        { coachId: 'tyson-luu' },
        { coachId: 'bella-tranquilano' },
        { coachId: 'nate-birhane' },
        { coachId: 'ryan-pangier' },
        { coachId: 'gavin-hegstrom' },
        { coachId: 'caden-heck' },
        { coachId: 'alivia-eaton' },
        { coachId: 'zach-benge' },
        { coachId: 'cj-hangartner' }

        ],
        '/list-coaches/:callingPage': [
        { callingPage: 'advanced' },
        { callingPage: 'accessible' },
        { callingPage: 'active' }
        ]
    };
  
  function generateSitemap() {
    return (
      new Sitemap(router)
        .build('https://universal-athletics.netlify.app/') // Replace with your actual domain
        .save('./public/sitemap.xml') // Save to public folder
    );
  }
  
  generateSitemap();



  