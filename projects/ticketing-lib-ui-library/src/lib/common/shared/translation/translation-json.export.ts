import administrationEn from '../../../../assets/i18n/administration/en.json';
import administrationEs from '../../../../assets/i18n/administration/es.json';
import administrationFr from '../../../../assets/i18n/administration/fr.json';
import applicationEn from '../../../../assets/i18n/application/en.json';
import applicationEs from '../../../../assets/i18n/application/es.json';
import applicationFr from '../../../../assets/i18n/application/fr.json';
import customersEn from '../../../../assets/i18n/customers/en.json';
import customersEs from '../../../../assets/i18n/customers/es.json';
import customersFr from '../../../../assets/i18n/customers/fr.json';
import equipmentsEn from '../../../../assets/i18n/equipments/en.json';
import equipmentsEs from '../../../../assets/i18n/equipments/es.json';
import equipmentsFr from '../../../../assets/i18n/equipments/fr.json';
import organizationEn from '../../../../assets/i18n/organization/en.json';
import organizationEs from '../../../../assets/i18n/organization/es.json';
import organizationFr from '../../../../assets/i18n/organization/fr.json';
import serviceOfferEn from '../../../../assets/i18n/serviceOffer/en.json';
import serviceOfferEs from '../../../../assets/i18n/serviceOffer/es.json';
import serviceOfferFr from '../../../../assets/i18n/serviceOffer/fr.json';
import sharedEn from '../../../../assets/i18n/shared/en.json';
import sharedEs from '../../../../assets/i18n/shared/es.json';
import sharedFr from '../../../../assets/i18n/shared/fr.json';
import ticketingEn from '../../../../assets/i18n/ticketing/en.json';
import ticketingEs from '../../../../assets/i18n/ticketing/es.json';
import ticketingFr from '../../../../assets/i18n/ticketing/fr.json';
import userEn from '../../../../assets/i18n/user/en.json';
import userEs from '../../../../assets/i18n/user/es.json';
import userFr from '../../../../assets/i18n/user/fr.json';

type LanguageSupported = 'fr' | 'en' | 'es';

export type JsonTranslateKey = Record<LanguageSupported, any>;

export const sharedJson: JsonTranslateKey = {
  fr: sharedFr,
  en: sharedEn,
  es: sharedEs
};

export const organizationJson: JsonTranslateKey = {
  fr: organizationFr,
  en: organizationEn,
  es: organizationEs
};

export const ticketingJson: JsonTranslateKey = {
  fr: ticketingFr,
  en: ticketingEn,
  es: ticketingEs
};

export const administrationJson: JsonTranslateKey = {
  fr: administrationFr,
  en: administrationEn,
  es: administrationEs
};

export const applicationJson: JsonTranslateKey = {
  fr: applicationFr,
  en: applicationEn,
  es: applicationEs
};

export const serviceOfferJson: JsonTranslateKey = {
  fr: serviceOfferFr,
  en: serviceOfferEn,
  es: serviceOfferEs
};

export const equipmentsJson: JsonTranslateKey = {
  fr: equipmentsFr,
  en: equipmentsEn,
  es: equipmentsEs
};

export const customersJson: JsonTranslateKey = {
  fr: customersFr,
  en: customersEn,
  es: customersEs
};

export const userJson: JsonTranslateKey = {
  fr: userFr,
  en: userEn,
  es: userEs
};

export default {
  sharedJson,
  organizationJson,
  ticketingJson,
  administrationJson,
  applicationJson,
  serviceOfferJson,
  equipmentsJson,
  customersJson,
  userJson
};
