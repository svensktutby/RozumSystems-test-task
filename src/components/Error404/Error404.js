import React from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <section>
      <div>
        <h1>404 - Page not&nbsp;found</h1>
        <p>
          —<span>Uh oh.</span> <span>¯\_(ツ)_/¯</span>—
        </p>
      </div>

      <footer>
        <p>
          Take me back to:&nbsp;
          <Link to="/">home page</Link>
        </p>
      </footer>
    </section>
  );
};
