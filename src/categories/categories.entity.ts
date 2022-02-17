import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, Entity, UpdateDateColumn, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/products.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    name: string;

    @OneToMany<Product>(type => Product, product => product.category, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    products: Array<Product>;

    @ApiProperty()
    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}