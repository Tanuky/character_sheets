import { DdFiveSheetModule } from './dd-five-sheet.module';

describe('DdFiveSheetModule', () => {
  let ddFiveSheetModule: DdFiveSheetModule;

  beforeEach(() => {
    ddFiveSheetModule = new DdFiveSheetModule();
  });

  it('should create an instance', () => {
    expect(ddFiveSheetModule).toBeTruthy();
  });
});
