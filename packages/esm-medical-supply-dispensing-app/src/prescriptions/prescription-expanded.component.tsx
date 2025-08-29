import React from 'react';
import { type PatientUuid } from '@openmrs/esm-framework';
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '@carbon/react';
import { useTranslation } from 'react-i18next';
import styles from './prescription-expanded.scss';
import PrescriptionDetails from './prescription-details.component';
import { NonDrugDispensingUnit, type NonDrugMedicationDispense } from '../types';

interface TabItem {
  name: string;
  component: JSX.Element;
}

const PrescriptionExpanded: React.FC<{
  encounterUuid: string;
  patientUuid: PatientUuid;
  medicationDispense: NonDrugMedicationDispense;
}> = ({ encounterUuid, patientUuid, medicationDispense }) => {
  const { t } = useTranslation();
  const tabs: TabItem[] = [
    {
      name: t('prescriptionDetails', 'Prescription details'),
      component: (
        <PrescriptionDetails
          encounterUuid={encounterUuid}
          patientUuid={patientUuid}
          medicationDispense={medicationDispense}
        />
      ),
    },
  ];

  return (
    <div className={styles.expandedTabsParentContainer}>
      <div className={styles.expandedTabsContainer}>
        <Tabs>
          <TabList aria-label={t('tabList', 'Tab List')}>
            {tabs.map((tab: TabItem, index: number) => (
              <Tab key={index} className={styles.orderTabs}>
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((tab: TabItem, index) => (
              <TabPanel key={index}>{tab.component}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default PrescriptionExpanded;
