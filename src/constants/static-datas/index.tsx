import { ISingleAccordion } from "../../components/accordion"
import { ISelectBar } from "../../components/select-bar"

export const selectbarData: ISelectBar[] = [
    {
        id: '1',
        options: [{
            label: 'Heavy Equipment Operator',
            value: 'Heavy Equipment Operator'
        }],
        placeholder: 'Job Templates'
    },
    {
        id: '2',
        options: [{
            label: 'New York, NY',
            value: 'New York, NY'
        }],
        placeholder: 'Locations'
    },
    {
        id: '3',
        options: [{
            label: 'New York, NY',
            value: 'New York, NY'
        }],
        placeholder: 'Subsidiary'
    },
    {
        id: '4',
        options: [{
            label: 'New York, NY',
            value: 'New York, NY'
        }],
        placeholder: 'Subsidiary'
    },
]

export const accordionData: ISingleAccordion[] = [
    {
        id: '1',
        list: [
            'Alabama - Non-Compete Agreement',
            'California - Non-Compete Agreement',
            'Florida - Non-Compete Agreement'
        ],
        title: 'Non-Compete Agreements'
    },
    {
        id: '2',
        list: [
            'Alabama - Non-Compete Agreement',
            'California - Non-Compete Agreement',
            'Florida - Non-Compete Agreement'
        ],
        title: 'Drug Policies'
    },
    {
        id: '3',
        list: [
            'Alabama - Non-Compete Agreement',
            'California - Non-Compete Agreement',
            'Florida - Non-Compete Agreement'
        ],
        title: 'Payroll Handbook'
    },
]