export interface IPet {
	id: number;
	category: ICategoryPet;
	name: string;
	photoUrls: string[];
	tags: ITagPet;
	status: 'available' | 'pending' | 'sold';
}

export interface ICategoryPet {
	id: number;
	name: string;
}

export interface ITagPet {
	id: number;
	name: string;
}
