/**
 * Created by gbray on 30/12/2016.
 */
// Angular
import { NgModule } from '@angular/core';
// Modules
import { UtilModule } from '../../../util/util.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductFormTemplate } from './templates/form/product-form.template';
import { ProductConsultTemplate } from './templates/consult/product-consult.template';
import { WorksProductConsultComponent } from './consults/product-works/product-works-consult.component';
import { DiscsProductConsultComponent } from './consults/product-discs/product-discs-consult.component';
import { DetailsProductConsultComponent } from './consults/product-details/product-details-consult.component';
import { DetailsProductFormFragment } from './forms/product-details/details-product-form.fragment';
import { GeneralProductConsultComponent } from './consults/product-general/product-general-consult.component';
import { GeneralProductFormFragment } from './forms/product-general/general-product-form.fragment';
import { DiscsProductFormFragment } from './forms/product-discs/discs-product-form.fragment';
import { SearchDiscsModal } from './forms/product-discs/search/search-disc-modal';
import { WorksProductFormFragment } from './forms/product-works/works-product-form.fragment';
import { ProductBoxSetFormFragment } from './forms/product-box-set/product-box-set-form.fragment';
import { ProductBoxSetConsultComponent } from './consults/product-box-set/product-box-set-consult.component';
// Repositories
import { ProductRepository } from '../../api/product.repository';
import { ManufacturingRepository } from '../../api/manufacturing.repository';
import { CompanyRepository } from '../../../referentiel/api/company.repository';
import { ThirdPartyRepository } from '../../../referentiel/api/third-party.repository';
import { WorkRepository } from '../../../milo/api/work-milo.repository';
import { ExploitationRepository } from '../../api/exploitation.repository';
import { SupportRepository } from '../../api/support.repository';
import { ProductTypeRepository } from '../../api/product-type.repository';
import { LabelRepository } from '../../api/label.repository';
import { CategoryRepository } from '../../api/category.repository';
import { StatusRepository } from '../../api/status.repository';
import { DistributorRepository } from '../../api/distributor.repository';
import { DiscRepository } from '../../api/disc.repository';
import { PressingFormatRepository } from '../../api/pressing-format.repository';
import { TerritoryRepository } from '../../../referentiel/api/territory.repository';
// Services
import { ConfirmationService } from 'primeng/components/common/api';
import { ProductParentTemplate } from './templates/parent/product-parent.template';
import { EditorRepository } from '../../api/editor.repository';

@NgModule({
  imports: [
    UtilModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductParentTemplate,
    // form
    ProductFormTemplate,
    DetailsProductFormFragment,
    GeneralProductFormFragment,
    DiscsProductFormFragment,
    WorksProductFormFragment,
    ProductBoxSetFormFragment,

    // consult
    ProductConsultTemplate,
    GeneralProductConsultComponent,
    WorksProductConsultComponent,
    DiscsProductConsultComponent,
    DetailsProductConsultComponent,
    ProductBoxSetConsultComponent,

    // search

    // other
    SearchDiscsModal
  ],
  providers: [ProductRepository, ManufacturingRepository, CompanyRepository, ThirdPartyRepository,
    TerritoryRepository, ConfirmationService, WorkRepository, ExploitationRepository, SupportRepository,
    ProductTypeRepository, LabelRepository, CategoryRepository, StatusRepository,
    DistributorRepository, DiscRepository, PressingFormatRepository, CompanyRepository,
    EditorRepository]

})

export class ProductModule {
}
