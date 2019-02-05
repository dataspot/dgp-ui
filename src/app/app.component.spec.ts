import './rxjs-extensions';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DatasetListComponent } from './dataset-list/dataset-list.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { StepsComponent } from './steps/steps.component';
import { StepExtractComponent } from './step-extract/step-extract.component';
import { StepMappingComponent } from './step-mapping/step-mapping.component';
import { StepEnrichComponent } from './step-enrich/step-enrich.component';
import { StepPublishComponent } from './step-publish/step-publish.component';
import { ResultsComponent } from './results/results.component';
import { ResultTabsComponent } from './result-tabs/result-tabs.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { StepTabsComponent } from './step-tabs/step-tabs.component';
import { StepExtractSourceComponent } from './step-extract-source/step-extract-source.component';
import { StepExtractStructureComponent } from './step-extract-structure/step-extract-structure.component';
import { StepMappingFieldComponent } from './step-mapping-field/step-mapping-field.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        DatasetListComponent,
        LogoComponent,
        FooterComponent,
        WorkspaceComponent,
        StepsComponent,
        StepExtractComponent,
        StepMappingComponent,
        StepEnrichComponent,
        StepPublishComponent,
        ResultsComponent,
        ResultTabsComponent,
        ResultTableComponent,
        StepTabsComponent,
        StepExtractSourceComponent,
        StepExtractStructureComponent,
        StepMappingFieldComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
        }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'kuvira'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kuvira');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to kuvira!');
  }));
});
