import React from 'react';

import { StyledSocial } from './StyledSocial';

import { FaTwitter, FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <StyledSocial>
      <a href="https://twitter.com/_p0lar_bear" aria-label="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="https://github.com/yashk2000" aria-label="Github">
        <FaGithub size={24} />
      </a>
    </StyledSocial>
  );
};

export default Social;
