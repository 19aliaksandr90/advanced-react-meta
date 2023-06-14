import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: aliaksandr.samusevich@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/19aliaksandr90',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/aliaksandr-samusevich/',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const handleClick = (e) => {
    const id = `${e.target.id}-section`;
    const element = document.getElementById(id);

    element
      ? element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      : null;
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            {socials.map((social) => {
              return (
                <a
                  target='_blank'
                  style={{ margin: '1em' }}
                  key={social.url}
                  href={social.url}
                >
                  <FontAwesomeIcon icon={social.icon} size='2x' />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a id='projects' onClick={handleClick}>
                Projects
              </a>
              <a id='contactme' onClick={handleClick}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
