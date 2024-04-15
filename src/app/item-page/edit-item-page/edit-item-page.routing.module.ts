import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditItemPageComponent } from './edit-item-page.component';
import { ItemWithdrawComponent } from './item-withdraw/item-withdraw.component';
import { ItemReinstateComponent } from './item-reinstate/item-reinstate.component';
import { ItemPrivateComponent } from './item-private/item-private.component';
import { ItemPublicComponent } from './item-public/item-public.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';
import { ItemBitstreamsComponent } from './item-bitstreams/item-bitstreams.component';
import { ItemCollectionMapperComponent } from './item-collection-mapper/item-collection-mapper.component';
import { ItemMoveComponent } from './item-move/item-move.component';
import { ItemRegisterDoiComponent } from './item-register-doi/item-register-doi.component';
import { ItemRelationshipsComponent } from './item-relationships/item-relationships.component';
import { I18nBreadcrumbResolver } from '../../core/breadcrumbs/i18n-breadcrumb.resolver';
import { ItemVersionHistoryComponent } from './item-version-history/item-version-history.component';
import { ItemAuthorizationsComponent } from './item-authorizations/item-authorizations.component';
import { ResourcePolicyTargetResolver } from '../../shared/resource-policies/resolvers/resource-policy-target.resolver';
import { ResourcePolicyResolver } from '../../shared/resource-policies/resolvers/resource-policy.resolver';
import { ResourcePolicyCreateComponent } from '../../shared/resource-policies/create/resource-policy-create.component';
import { ResourcePolicyEditComponent } from '../../shared/resource-policies/edit/resource-policy-edit.component';
import { I18nBreadcrumbsService } from '../../core/breadcrumbs/i18n-breadcrumbs.service';
import {
  ITEM_EDIT_AUTHORIZATIONS_PATH,
  ITEM_EDIT_DELETE_PATH,
  ITEM_EDIT_MOVE_PATH,
  ITEM_EDIT_PRIVATE_PATH,
  ITEM_EDIT_PUBLIC_PATH,
  ITEM_EDIT_REINSTATE_PATH,
  ITEM_EDIT_WITHDRAW_PATH,
  ITEM_EDIT_REGISTER_DOI_PATH,
  ITEM_EDIT_UNLINK_ORCID
} from './edit-item-page.routing-paths';
import { ItemPageReinstateGuard } from './item-page-reinstate.guard';
import { ItemPageWithdrawGuard } from './item-page-withdraw.guard';
import { ItemPageMetadataGuard } from './item-page-metadata.guard';
import { ItemPageAdministratorGuard } from '../item-page-administrator.guard';
import { ItemPageStatusGuard } from './item-page-status.guard';
import { ItemPageBitstreamsGuard } from './item-page-bitstreams.guard';
import { ItemPageRelationshipsGuard } from './item-page-relationships.guard';
import { ItemPageVersionHistoryGuard } from './item-page-version-history.guard';
import { ItemPageCollectionMapperGuard } from './item-page-collection-mapper.guard';
import { ItemPageCurateGuard } from './item-page-curate.guard';
import { ItemPageAccessControlGuard } from './item-page-access-control.guard';
import { ThemedDsoEditMetadataComponent } from '../../dso-shared/dso-edit-metadata/themed-dso-edit-metadata.component';
import { ItemPageRegisterDoiGuard } from './item-page-register-doi.guard';
import { ItemCurateComponent } from './item-curate/item-curate.component';
import { ThemedItemStatusComponent } from './item-status/themed-item-status.component';
import { ItemAccessControlComponent } from './item-access-control/item-access-control.component';
import { ItemUnlinkOrcidComponent } from './item-unlink-orcid/item-unlink-orcid.component';
import { ItemPageUnlinkOrcidGuard } from './item-page-unlink-orcid.guard';
import { EditItemResolver } from '../../core/shared/resolvers/edit-item.resolver';

/**
 * Routing module that handles the routing for the Edit Item page administrator functionality
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        resolve: {
          breadcrumb: I18nBreadcrumbResolver,
          dso: EditItemResolver,
        },
        data: { breadcrumbKey: 'item.edit' },
        children: [
          {
            path: '',
            component: EditItemPageComponent,
            children: [
              {
                path: '',
                redirectTo: 'status',
                pathMatch: 'full'
              },
              {
                path: 'status',
                component: ThemedItemStatusComponent,
                data: { title: 'item.edit.tabs.status.title', showBreadcrumbs: true },
                canActivate: [ItemPageStatusGuard]
              },
              {
                path: 'bitstreams',
                component: ItemBitstreamsComponent,
                data: { title: 'item.edit.tabs.bitstreams.title', showBreadcrumbs: true },
                canActivate: [ItemPageBitstreamsGuard]
              },
              {
                path: 'metadata',
                component: ThemedDsoEditMetadataComponent,
                data: { title: 'item.edit.tabs.metadata.title', showBreadcrumbs: true },
                canActivate: [ItemPageMetadataGuard]
              },
              {
                path: 'curate',
                component: ItemCurateComponent,
                data: { title: 'item.edit.tabs.curate.title', showBreadcrumbs: true },
                canActivate: [ItemPageCurateGuard]
              },
              {
                path: 'relationships',
                component: ItemRelationshipsComponent,
                data: { title: 'item.edit.tabs.relationships.title', showBreadcrumbs: true },
                canActivate: [ItemPageRelationshipsGuard]
              },
              /* TODO - uncomment & fix when view page exists
              {
                path: 'view',
                component: ItemBitstreamsComponent,
                data: { title: 'item.edit.tabs.view.title', showBreadcrumbs: true }
              }, */
              /* TODO - uncomment & fix when curate page exists
              {
                path: 'curate',
                component: ItemBitstreamsComponent,
                data: { title: 'item.edit.tabs.curate.title', showBreadcrumbs: true }
              }, */
              {
                path: 'versionhistory',
                component: ItemVersionHistoryComponent,
                data: { title: 'item.edit.tabs.versionhistory.title', showBreadcrumbs: true },
                canActivate: [ItemPageVersionHistoryGuard]
              },
              {
                path: 'access-control',
                component: ItemAccessControlComponent,
                data: { title: 'item.edit.tabs.access-control.title', showBreadcrumbs: true },
                canActivate: [ItemPageAccessControlGuard]
              },
              {
                path: 'mapper',
                component: ItemCollectionMapperComponent,
                data: { title: 'item.edit.tabs.item-mapper.title', showBreadcrumbs: true },
                canActivate: [ItemPageCollectionMapperGuard]
              }
            ]
          },
          {
            path: 'mapper',
            component: ItemCollectionMapperComponent,
          },
          {
            path: ITEM_EDIT_WITHDRAW_PATH,
            component: ItemWithdrawComponent,
            canActivate: [ItemPageWithdrawGuard]
          },
          {
            path: ITEM_EDIT_REINSTATE_PATH,
            component: ItemReinstateComponent,
            canActivate: [ItemPageReinstateGuard]
          },
          {
            path: ITEM_EDIT_PRIVATE_PATH,
            component: ItemPrivateComponent,
          },
          {
            path: ITEM_EDIT_PUBLIC_PATH,
            component: ItemPublicComponent,
          },
          {
            path: ITEM_EDIT_DELETE_PATH,
            component: ItemDeleteComponent,
          },
          {
            path: ITEM_EDIT_MOVE_PATH,
            component: ItemMoveComponent,
            data: { title: 'item.edit.move.title' },
          },
          {
            path: ITEM_EDIT_REGISTER_DOI_PATH,
            component: ItemRegisterDoiComponent,
            canActivate: [ItemPageRegisterDoiGuard],
            data: { title: 'item.edit.register-doi.title' },
          },
          {
            path: ITEM_EDIT_UNLINK_ORCID,
            component: ItemUnlinkOrcidComponent,
            canActivate: [ItemPageUnlinkOrcidGuard],
          },
          {
            path: ITEM_EDIT_AUTHORIZATIONS_PATH,
            children: [
              {
                path: 'create',
                resolve: {
                  resourcePolicyTarget: ResourcePolicyTargetResolver
                },
                component: ResourcePolicyCreateComponent,
                data: { title: 'resource-policies.create.page.title' }
              },
              {
                path: 'edit',
                resolve: {
                  resourcePolicy: ResourcePolicyResolver
                },
                component: ResourcePolicyEditComponent,
                data: { title: 'resource-policies.edit.page.title' }
              },
              {
                path: '',
                component: ItemAuthorizationsComponent,
                data: { title: 'item.edit.authorizations.title' }
              }
            ]
          }
        ]
      }
    ])
  ],
  providers: [
    I18nBreadcrumbResolver,
    I18nBreadcrumbsService,
    ResourcePolicyResolver,
    ResourcePolicyTargetResolver,
    ItemPageReinstateGuard,
    ItemPageWithdrawGuard,
    ItemPageAdministratorGuard,
    ItemPageMetadataGuard,
    ItemPageCurateGuard,
    ItemPageStatusGuard,
    ItemPageBitstreamsGuard,
    ItemPageRelationshipsGuard,
    ItemPageVersionHistoryGuard,
    ItemPageCollectionMapperGuard,
    ItemPageAccessControlGuard,
    ItemPageRegisterDoiGuard,
    ItemPageUnlinkOrcidGuard,
    EditItemResolver
  ]
})
export class EditItemPageRoutingModule {

}