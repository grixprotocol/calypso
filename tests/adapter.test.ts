import { validateAdapter } from '../src/utils/validator';
import exampleAdapter from '../src/adapters/example-user';

describe('Adapter Validation', () => {
  it('should validate a correct adapter', () => {
    const adapter = exampleAdapter();
    expect(() => validateAdapter(adapter)).not.toThrow();
  });
}); 