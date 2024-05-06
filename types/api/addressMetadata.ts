export interface AddressMetadataInfo {
  addresses: Record<string, {
    tags: Array<AddressMetadataTag>;
    reputation: number | null;
  }>;
}

export type AddressMetadataTagType = 'name' | 'generic' | 'classifier' | 'information' | 'note' | 'protocol';

// Response model from Metadata microservice API
export interface AddressMetadataTag {
  slug: string;
  name: string;
  tagType: AddressMetadataTagType;
  ordinal: number;
  meta: string | null;
}

// Response model from Blockscout API with parsed meta field
export interface AddressMetadataTagApi extends Omit<AddressMetadataTag, 'meta'> {
  meta: {
    textColor?: string;
    bgColor?: string;
    tagUrl?: string;
    tooltipIcon?: string;
    tooltipTitle?: string;
    tooltipDescription?: string;
    tooltipUrl?: string;
    actionURL?: string;
    appID?: string;
    logoURL?: string;
    text?: string;
  } | null;
}
