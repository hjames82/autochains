#!/bin/bash
set -e
cd backend
uvicorn main:app --host 0.0.0.0 --port 5000
