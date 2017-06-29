import { Component } from '@angular/core';
import { Modal } from '../../core/services/jetpad-modal.service';

@Component({
    selector: 'jp-users-modal',
    template: `
        <div class="modal show">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" 
                            aria-hidden="true" (click)="onCancel()">×</button>
                        <h3 class="modal-title">
                            Manages user accounts
                        </h3>
                    </div>
                
                    <div class="modal-body">
                        <div class="list-group-item" *ngFor="let account of accounts">
                            <div>
                                <div class="row-picture">
                                  {{account.name}}
                                </div>
                                <div class="row-content">
                               
                                    <p class="list-group-item-heading">
                                        {{account.name}}</p>
                                    <p class="list-group-item-text">
                                        {{account.lastActivityTime | myMoment}}</p>
                            </div>
                                
                            </div>
                            <div>
                                <button class="btn btn-link" (click)="onLogout(account)">
                                    <i class="material-icons">exit_to_app</i>
                                    </button>
                            </div>
                            <!--
                            <div class="list-group-separator"></div>
                            -->
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary"  (click)="onOk()">
                            Add Account</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal {
            margin-top: 4em;
        }
        .list-group-item {
            display: flex;
            justify-content: space-between;
        }
        .list-group-item > div {
            display: flex;
        }
    `]
})

@Modal()
export class UsersModalComponent {

    public ok: Function;
    public logout: Function;
    public closeModal: Function;
    public accounts: any;

    public  onCancel(): void {
        this.closeModal();
    }

    public onLogout(account) {
        setTimeout(() => {
            this.closeModal();
        }, 150);
        this.logout(account);
    }

    public  onOk(): void {
        setTimeout(() => {
            this.closeModal();
        }, 150);
        this.ok();
    }
}