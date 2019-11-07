<template>
    <canvas id="canvas" width="500" height="500"></canvas>
</template>
<script>
export default {
    data(){
        return{
            canvas:null,
            nodeId:[{
                 node: '1c',
                 x:(document.body.offsetWidth-300)/2,
                 y:(document.body.offsetHeight-300)/2
                }
                ,{
                 node: '2c',
                 x:(document.body.offsetWidth-100)/2,
                 y:(document.body.offsetHeight-500)/2
                }
                ,{
                 node: '3c',
                 x:(document.body.offsetWidth-300)/2,
                 y:(document.body.offsetHeight+200)/2
                }
                ,{
                 node: '4c',
                 x:(document.body.offsetWidth+100)/2,
                 y:(document.body.offsetHeight-300)/2
                }
                ,{
                 node: '5c',
                 x:(document.body.offsetWidth-100)/2,
                 y:(document.body.offsetHeight-60)/2
                }
                ,{
                 node: '6c',
                 x:(document.body.offsetWidth-100)/2,
                 y:(document.body.offsetHeight-60)/2
                }
                ],
            data:[
                {
                    node:'c6',
                    childNode:[],
                },
                {
                    node:'1c',
                    childNode:['2c','3c','5c']
                },
                {
                    node:'2c',
                    childNode:['4c','5c']
                }
            ]
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.canvas=document.getElementById('canvas');
            let canvas=this.canvas
            this.stage = new JTopo.Stage(canvas);
            let ctx = canvas.getContext("2d");
            ctx.canvas.width=document.body.offsetWidth;
            ctx.canvas.height=document.body.offsetHeight;
            let scene = new JTopo.Scene(this.stage);
            this.arr=[]
            this.nodeId.forEach((item,idx) => {
                this.arr.push(this.CircleNode(scene,item.node,item.x,item.y))
            });
            this.nodeItem=[]
            this.data.forEach((item,idx)=>{
                item.childNode.forEach((k,i)=>{
                    this.nodeItem.push({n1:item.node,n2:k})
                })
            })
            this.nodeItem.forEach((i,j)=>{
                this.arr.forEach((k,c)=>{
                 i['n1']=k['text']==i['n1'] ? k : i['n1'];
                 i['n2']=k['text']==i['n2'] ? k : i['n2'];
               })
            })
            this.nodeItem.forEach((i,idx)=>{
                this.Link(scene,i['n1'],i['n2']);
            })
        },

        CircleNode(scene,i,x,y){
            let  defaultNode = new JTopo.Node();
            defaultNode.text = i; // 文字
            defaultNode.textPosition = 'Middle_Center';// 文字居中
            defaultNode.textOffsetY = 0; // 文字向下偏移8个像素
            defaultNode.font = '14px 微软雅黑'; // 字体
            defaultNode.setLocation(x,y); // 位置
            defaultNode.setSize(100, 60);  // 尺寸
            defaultNode.borderRadius = 5; // 圆角
            defaultNode.borderWidth = 2; // 边框的宽度
            defaultNode.borderColor = '255,255,255'; //边框颜色            
            defaultNode.alpha = 1; //透明度
            scene.add(defaultNode);
            return defaultNode
        },
        Link(scene,a,b){
            // console.log(this.stage.find('node'))
            let link = null;
            link = new JTopo.Link(a,b);
            link.strokeColor = '255,0,255';
            link.offsetGap = 60;
            link.lineWidth = 2; // 线宽
            scene.add(link);
        }
    }
}
</script>
