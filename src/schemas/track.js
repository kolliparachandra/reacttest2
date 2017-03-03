import {schema} from 'normalizr'
import userSchema from './user'

const trackSchema= new schema.Entity('tracks')

trackSchema.define({
    user:userSchema
})

export default trackSchema;