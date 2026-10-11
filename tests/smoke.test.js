import test from 'node:test';
import assert from 'node:assert/strict';
import { projectName } from '../src/index.js';

test('starter repository is healthy', () => {
  assert.equal(projectName, 'Chat Orchestrator Phase 0');
});
