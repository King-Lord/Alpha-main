import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(Router, { children: _jsx(App, {}) }) }));
