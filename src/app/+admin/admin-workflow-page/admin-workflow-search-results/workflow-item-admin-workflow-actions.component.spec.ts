import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from '../../../core/shared/item.model';
import {
  ITEM_EDIT_DELETE_PATH,
  ITEM_EDIT_MOVE_PATH,
  ITEM_EDIT_PRIVATE_PATH,
  ITEM_EDIT_PUBLIC_PATH,
  ITEM_EDIT_REINSTATE_PATH,
  ITEM_EDIT_WITHDRAW_PATH
} from '../../../+item-page/edit-item-page/edit-item-page.routing.module';
import { getItemEditPath } from '../../../+item-page/item-page-routing.module';
import { URLCombiner } from '../../../core/url-combiner/url-combiner';
import { WorkflowItemAdminWorkflowActionsComponent } from './workflow-item-admin-workflow-actions.component';
import { WorkflowItem } from '../../../core/submission/models/workflowitem.model';
import { getWorkflowItemDeletePath, getWorkflowItemSendBackPath } from '../../../+workflowitems-edit-page/workflowitems-edit-page-routing.module';

describe('WorkflowItemAdminWorkflowActionsComponent', () => {
  let component: WorkflowItemAdminWorkflowActionsComponent;
  let fixture: ComponentFixture<WorkflowItemAdminWorkflowActionsComponent>;
  let id;
  let wfi;

  function init() {
    id = '780b2588-bda5-4112-a1cd-0b15000a5339';
    wfi = new WorkflowItem();
    wfi.id = id;
  }
  beforeEach(async(() => {
    init();
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([])
      ],
      declarations: [WorkflowItemAdminWorkflowActionsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowItemAdminWorkflowActionsComponent);
    component = fixture.componentInstance;
    component.wfi = wfi;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a delete button with the correct link', () => {
    const button = fixture.debugElement.query(By.css('a.delete-link'));
    const link = button.nativeElement.href;
    expect(link).toContain(new URLCombiner(getWorkflowItemDeletePath(wfi.id)).toString());
  });

  it('should render a move button with the correct link', () => {
    const a = fixture.debugElement.query(By.css('a.send-back-link'));
    const link = a.nativeElement.href;
    expect(link).toContain(new URLCombiner(getWorkflowItemSendBackPath(wfi.id)).toString());
  });
});
