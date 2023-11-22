export type CallbackDoc = {
  downloadUrl?: string
  uploadState?: string
  description: string
  driveSuccess: boolean
  embedUrl: string
  iconUrl: string
  id: string
  isShared: boolean
  lastEditedUtc: number
  mimeType: string
  name: string
  rotation: number
  rotationDegree: number
  serviceId: string
  sizeBytes: number
  type: string
  url: string
}

export type PickerCallback = {
  action: string
  docs: CallbackDoc[]
}

export type AuthResult = {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
  authuser: string
  prompt: string
}

type ViewIdOptions =
  | 'DOCS'
  | 'DOCS_IMAGES'
  | 'DOCS_IMAGES_AND_VIDEOS'
  | 'DOCS_VIDEOS'
  | 'DOCUMENTS'
  | 'DRAWINGS'
  | 'FOLDERS'
  | 'FORMS'
  | 'PDFS'
  | 'SPREADSHEETS'
  | 'PRESENTATIONS'

type DocViewMode = 'GRID' | 'LIST'

export type PickerConfiguration = {
  clientId: string
  developerKey: string
  viewId?: ViewIdOptions
  viewMimeTypes?: string
  setIncludeFolders?: boolean
  setSelectFolderEnabled?: boolean
  disableDefaultView?: boolean
  token?: string
  setOrigin?: string
  multiselect?: boolean
  disabled?: boolean
  appId?: string
  supportDrives?: boolean
  showUploadView?: boolean
  showUploadFolders?: boolean
  setParentFolder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customViews?: any[]
  locale?: string
  customScopes?: string[]
  maxItems?: number
  title?: string
  mineOnly?: boolean
  docsViewMode?: DocViewMode
  callbackFunction: (data: PickerCallback, accessToken: string) => any
}

export type AuthenticateParams = {
  clientId: string
  token: string
  customScopes?: string[]
  callbackFunction: (accessToken: string) => void
}

export const defaultConfiguration: PickerConfiguration = {
  clientId: '',
  developerKey: '',
  viewId: 'DOCS',
  callbackFunction: () => null,
}
