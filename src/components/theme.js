import {
    extendTheme,
    theme as base,
} from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {

        body: `Helvetica-W01-Bold, Helvetica-W02-Bold, Helvetica-LT-W10-Bold, DIN-Next-W01-Light, DIN-Next-W02-Light, DIN-Next-W10-Light, Helvetica-W01-Roman, Helvetica-W02-Roman, Helvetica-LT-W10-Roman, wf_b9cf1341b9ec4945852ac0f86, wf_e4b1e1e4405343d9ad0296011, Lulo-Clean-W01-One-Bold, Lulo-Clean-W05-One-Bold, ${base.fonts?.body}`,
    },
})

export default theme