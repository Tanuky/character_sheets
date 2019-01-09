import { SharedObjectsModule } from './shared-objects.module';

describe('SharedObjectsModule', () => {
  let sharedObjectsModule: SharedObjectsModule;

  beforeEach(() => {
    sharedObjectsModule = new SharedObjectsModule();
  });

  it('should create an instance', () => {
    expect(sharedObjectsModule).toBeTruthy();
  });
});
