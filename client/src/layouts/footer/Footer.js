import React from 'react';
import {
  Container
} from 'reactstrap';

import './Footer.css';

const AppFooter = props => {
  return (
    <div className="Footer mb-5">
      <Container>
        <hr/>
        <p className="lead text-muted text-center p-4">
          Auth Login &copy; by rooney@prog.rulz 2k19
          <br/>
          <small>
            <a href="https://www.github.com/rooneyrulz">mr.rooney</a>
          </small>
        </p>
      </Container>
    </div>
  );
}

export default AppFooter;
