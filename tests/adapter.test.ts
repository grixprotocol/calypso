import { validateAdapter } from '../src/utils/validator';
import exampleAdapter from '../adapters/exampleUser';

describe('Adapter Validation', () => {
  it('should validate a correct adapter', () => {
    const adapter = exampleAdapter();
    expect(() => validateAdapter(adapter)).not.toThrow();
  });
}); 