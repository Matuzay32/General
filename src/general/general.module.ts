import { CardProduct, CardProductSchema } from './entities/card-product.entity';
import { Module } from '@nestjs/common';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CardBrand, CardBrandSchema } from './entities/card-brand.entity';
import {
  CardProvider,
  CardProviderSchema,
} from './entities/card-provider.entity';
import { CardType, CardTypeSchema } from './entities/card-type.entity';
import { Country, CountrySchema } from './entities/country.entity';
import { State, StateSchema } from './entities/state.entity';
import { City, CitySchema } from './entities/card-city.entity';
import { Zipcode, ZipcodeSchema } from './entities/zipcode.entity';
import {
  CardProviderZipcode,
  CardProviderZipcodeSchema,
} from './entities/card-provider-zipcode.entity';
import {
  CardProviderCity,
  CardProviderCitySchema,
} from './entities/card-provider-city.entity';
import {
  CardProviderState,
  CardProviderStateSchema,
} from './entities/card-provider-state.entity';
import {
  CardProviderCountry,
  CardProviderCountrySchema,
} from './entities/card-provider-country';
import {
  CardPlasticStock,
  CardPlasticStockSchema,
} from './entities/card-plastic-stock.entity';
import { CreditTopic, CreditTopicSchema } from './entities/credit-topic.entity';
import {
  WalletStockPolicy,
  WalletStockPolicySchema,
} from './entities/wallet-stock-policy.entity';
import {
  GeneralTermsCondition,
  GeneralTermsConditionSchema,
} from './entities/general-terms-condition.entity';
import { DocumentTypeSchema, DocumentType } from './entities/document.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CardBrand.name, schema: CardBrandSchema },
      { name: CardProvider.name, schema: CardProviderSchema },
      { name: CardProduct.name, schema: CardProductSchema },
      { name: CardType.name, schema: CardTypeSchema },
      { name: Country.name, schema: CountrySchema },
      { name: State.name, schema: StateSchema },
      { name: City.name, schema: CitySchema },
      { name: Zipcode.name, schema: ZipcodeSchema },
      { name: CardProviderZipcode.name, schema: CardProviderZipcodeSchema },
      { name: CardProviderCity.name, schema: CardProviderCitySchema },
      { name: CardProviderState.name, schema: CardProviderStateSchema },
      { name: CardProviderCountry.name, schema: CardProviderCountrySchema },
      { name: CardPlasticStock.name, schema: CardPlasticStockSchema },
      { name: CreditTopic.name, schema: CreditTopicSchema },
      { name: WalletStockPolicy.name, schema: WalletStockPolicySchema },
      { name: GeneralTermsCondition.name, schema: GeneralTermsConditionSchema },
      { name: DocumentType.name, schema: DocumentTypeSchema },
    ]),
  ],
  controllers: [GeneralController],
  providers: [GeneralService],
})
export class GeneralModule {}
