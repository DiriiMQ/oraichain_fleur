import { Module, Global } from '@nestjs/common';
import { EuenoService } from './eueno.service';

@Global()
@Module({
    providers: [EuenoService],
    exports: [EuenoService]
})
export class EuenoModule {}
