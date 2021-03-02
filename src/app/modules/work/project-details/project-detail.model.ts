export interface ProjectDetail {
  id:string;
  imageList: { imagePath: string, altText: string }[];
  projectInfo: {
    name: string;
    category: string;
    client: string;
    projectDate: string;
    projectUrl: string;
  };
  responsibilities: string[];
  description: string[];
  header: string;
}
