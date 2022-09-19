import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AutoIncrement,
} from 'sequelize-typescript'

@Table({
    modelName: 'test',
    tableName: 'test',
})
export class Test extends Model<Test> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    readonly id!: number

    @Column(DataType.STRING)
    name!: string

    @Column(DataType.STRING)
    description!: string
}